import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { Pass } from '../../classes/pass';
import { PassService } from '../services/pass/pass.service';
import { NgbModal, NgbTabset } from '@ng-bootstrap/ng-bootstrap';
import { CreateQueuedTelecommandComponent } from '../create-queued-telecommand/create-queued-telecommand.component';
import { TelecommandService } from 'src/app/services/telecommand/telecommand.service';
import { Telecommand } from 'src/classes/telecommand';
import { QueuedTelecommandService } from 'src/app/services/queuedTelecommand/queued-telecommand.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { QueuedTelecommand } from 'src/classes/queuedTelecommand';
import { Observable, forkJoin, empty, of } from 'rxjs';
import { mergeMap, delay } from 'rxjs/operators';
import { TelecommandBatchService } from 'src/app/services/telecommandBatch/telecommand-batch.service';
import { TelecommandBatch } from 'src/classes/telecommandBatch';
import { PresetTelecommandService } from 'src/app/services/presetTelecommand/preset-telecommand.service';
import { PassSum } from 'src/classes/pass-sum';
import { CreatePassComponent } from '../create-pass/create-pass.component';

import { ToastrService } from 'ngx-toastr';
import { async } from '@angular/core/testing';
import * as moment from 'moment';

const dateFormat = require('dateformat');

@Component({
  selector: 'app-queues',
  templateUrl: './queues.component.html',
  styleUrls: ['./queues.component.scss','../../../node_modules/ngx-toastr/toastr.css'],
  providers: [PassService]
})
export class QueuesComponent implements OnInit {

  executionQueue: boolean;
  transmissionQueue: boolean;
  futurePasses: Pass[];
  futurePassesObs: Observable<Pass[]>;
  futurePassesTotal: Observable<number>;
  pastPasses: Pass[];
  pastPassesObs: Observable<Pass[]>;
  pastPassesTotal: Observable<number>;
  telecommands: Telecommand[];
  telecommandBatches: TelecommandBatch[];
  selectedPass: Pass;
  calculatedTransmissionID: number;
  calculatedExecutionID: number;

  sumTransmissionResults : PassSum[];
  sumExecutionResults : PassSum[];

  additionSuccessStr: string = "";
  additionFailureStr: string = "";

  constructor(private passService: PassService,
    private modalService: NgbModal,
    private telecommandService: TelecommandService,
    private telecommandBatchService: TelecommandBatchService,
    private presetTelecommandService: PresetTelecommandService,
    private queuedTelecommandService: QueuedTelecommandService,
    private auth: AuthService,
    private toastr: ToastrService) {
      this.pastPassesObs = passService.pastPasses;
      this.futurePassesObs = passService.futurePasses;
      this.pastPassesTotal = passService.pastTotal;
      this.futurePassesTotal = passService.futureTotal;
     }

  private tabSet: NgbTabset;

  @ViewChild(NgbTabset) set content(content: NgbTabset) {
    this.tabSet = content;
  };

  ngOnInit() {
    this.executionQueue = false;
    this.transmissionQueue = true;
    this.getPasses(true);
    this.getTelecommands();
    this.getTelecommandBatches();
  }

  getFormatedDate(unformatedDate: Date)
  {
    return dateFormat(unformatedDate, "dddd, mmmm dS, yyyy, HH:MM:ss");
  }

  onSelect(pass: Pass) : void
  {
    this.selectedPass = pass;
  }

  getPasses(isPaginated: boolean = false) : void{   
    this.selectedPass = null; 
    this.futurePassesObs.subscribe(passes => {
        this.futurePasses = passes;
      });
    this.pastPassesObs.subscribe(passes => {
      this.pastPasses = passes;
    })
  }

  getTelecommands() : void
  {
    this.telecommandService.getTelecommands()
      .subscribe(tcs => {
        this.telecommands = tcs;
      });
  }

  getTelecommandBatches() : void
  {
    this.telecommandBatchService.getTelecommandBatches()
      .subscribe(tbs => this.telecommandBatches = tbs);
  }

  promptAddPass() : void{
    const modalRef = this.modalService.open(CreatePassComponent);
    modalRef.result.then((result) => {
      this.passService.createPass(result)
        .subscribe(pass => {
          this.getPasses();
          this.toastr.success('Created a new pass.', "Success!");
        });
    }).catch((error) => {
      // Modal closed without submission
      console.log(error);
    });
  }

  promptAddQueuedTelecommand() : void
  {
    const modalRef = this.modalService.open(CreateQueuedTelecommandComponent);
    modalRef.componentInstance.isBatch = false;
    modalRef.componentInstance.telecommands = this.telecommands;
    modalRef.result.then((result) => {
      var userID = this.auth.getCurrentUser().id;
      var executionDate = moment(result.executionDate).utc(true);
      var createQtc = (self, activePasses) => {
        var activeTelecommand = this.telecommands.find(x => x.telecommandID == result.telecommandID);
        var [transID, execID] = self.calculatePassIDs(activePasses, activeTelecommand, executionDate.toDate());
        if (transID === -1 || execID === -1) return of(null);
        var newQtc = new QueuedTelecommand(
          execID,
          transID,
          userID,
          result.telecommandID,
          result.priorityLevel,
          executionDate.toDate(),
          result.commandParams,
        );
        this.additionSuccessStr = `Queued telecommand ${activeTelecommand.name} for transmission in pass ${transID} and execution in pass ${execID}.\n`;
        return self.queuedTelecommandService.createBatchQueuedTelecommands(
          [Object.values(newQtc)]
        );
      }
      this.createQueuedTelecommands(createQtc);
    }).catch((error) => {
      // Modal closed without submission
      console.log(error);
    });
  }

  promptAddQueuedTelecommandBatch() : void
  {
    const modalRef = this.modalService.open(CreateQueuedTelecommandComponent);
    modalRef.componentInstance.isBatch = true;
    modalRef.componentInstance.telecommandBatches = this.telecommandBatches;
    modalRef.result.then((result) => {
      var userID = this.auth.getCurrentUser().id;
      var executionDate = moment(result.executionDate).utc(true);
      this.presetTelecommandService.getPresetTelecommands(result.telecommandBatchID)
        .subscribe(ptcs => {
          var createQtc = (self, activePasses) => {
            var pQtcBatch = [];
            var isValid = true;
            this.additionSuccessStr = "";
            for (var i = 0; i < ptcs.length; i++){
              if (!isValid) continue;

              var telecommandExecutionTime = executionDate.clone().add(ptcs[i].dayDelay, 'days')
                                                                  .add(ptcs[i].hourDelay, 'hours')
                                                                  .add(ptcs[i].minuteDelay, 'minutes')
                                                                  .add(ptcs[i].secondDelay, 'seconds');
              var activeTelecommand = this.telecommands.find(x => x.telecommandID == ptcs[i].telecommandID);
              var [transID, execID] = self.calculatePassIDs(activePasses, activeTelecommand, telecommandExecutionTime.toDate());
              if (transID === -1 || execID === -1) isValid = false;
              pQtcBatch.push(Object.values(new QueuedTelecommand(
                execID,
                transID,
                userID,
                ptcs[i].telecommandID,
                ptcs[i].priorityLevel,
                telecommandExecutionTime.toDate(),
                ptcs[i].commandParameters,
              )));

              this.additionSuccessStr += `Queued telecommand ${activeTelecommand.name} for transmission in pass ${transID} and execution in pass ${execID}.\n`;
            }
            if (isValid) {
              return self.queuedTelecommandService.createBatchQueuedTelecommands(
                pQtcBatch
              );
            }
            return of(null);
          }
          this.createQueuedTelecommands(createQtc);
        });
    }).catch((error) => {
      // Modal closed without submission
      console.log(error);
    });
  }

  /**
   * Must have at least one active pass and pass limits must exist.
   */
  createQueuedTelecommands(qtcCreation: (self, activeP: Pass[]) => Observable<any>) : void
  {
    let passTransmissionSums = this.passService.getPassTransmissionSums();
    let passExecutionSums = this.passService.getPassExecutionSums();
    forkJoin([passTransmissionSums, passExecutionSums])
      .pipe(mergeMap(results => {
        this.sumTransmissionResults = results[0];
        this.sumExecutionResults = results[1];
        return qtcCreation(this, this.futurePasses);
      }))
      .subscribe(() => {
        if (this.additionFailureStr === ""){
          var additionSuccesses = this.additionSuccessStr.split('\n');
          for (var i = 0; i < additionSuccesses.length-1; i++){
            this.toastr.success(additionSuccesses[i], "Success!");
          }
        } else {
          this.toastr.error(this.additionFailureStr, "Oops!");
        }
        this.additionFailureStr = "";
        this.additionSuccessStr = "";
        this.passService.refreshPasses();
        this.getPasses();        
      });
  }

  calculatePassIDs(activePasses: Pass[], activeTelecommand: Telecommand, executionTime: Date) : [number, number]
  {
    var calcTransID, calcExecID;
    
    // Execution
    if (!this.sumExecutionResults) {
      calcExecID = activePasses[0].passID;
    } 
    else {
      for (var i = 0; i < activePasses.length; i++) {
        var activePassDateTime = moment(activePasses[i].estimatedPassDateTime).utc(true).toDate();
        //activePassDateTime.setUTCHours(activePassDateTime.getUTCHours() - activePassDateTime.getTimezoneOffset() / 60);
        if (executionTime.getTime() > activePassDateTime.getTime()) continue;
        if (i == 0) {
          this.additionFailureStr = 'No pass exists to execute this command. Create a new pass and try again.';
          break;
        }

        var activePass = activePasses[i - 1];
        var passSum = this.sumExecutionResults.find(x => x.passID == activePass.passID);

        // Limit passes on power.
        if (!passSum || passSum.sumPower + activeTelecommand.powerConsumption <= activePass.availablePower)
        {
          if (!passSum && activeTelecommand.powerConsumption > activePass.availablePower){
            this.additionFailureStr = 'Error: Cannot add telecommand to queue. Telecommand power consumption exceeds the maximum power limitation in one pass.'
            break;
          }
          calcExecID = activePass.passID;
          if (!passSum) {
            console.log('pushed from exec', activeTelecommand);
            this.sumExecutionResults.push({passID: calcExecID, sumBandwidth: activeTelecommand.bandwidthUsage, sumPower: activeTelecommand.powerConsumption});
          }
          break;
        } else {
          this.additionFailureStr = 'Error: Pass capacity reached. Cannot queue telecommand within specified pass.';
          break;
        }
      }
    }
    if (!calcExecID) {
      // TODO: if it fits in no existing passes, create a new pass and plop this telecommand in there.
      if (this.additionFailureStr === "") this.additionFailureStr = 'No passes currently exist that will contain the requested telecommand(s). Create a new pass or modify the maximum pass limits and try again.';
      return [-1,-1];
    }

    // Transmission
    if (!this.sumTransmissionResults) {
      calcTransID = activePasses[0].passID;
    }
    else {
      for (var i = 0; i < activePasses.length; i++) {
        var passSum = this.sumTransmissionResults.find(x => x.passID == activePasses[i].passID);
        var activePass = activePasses[i];

        // Limit passes on bandwidth.
        if (!passSum || passSum.sumBandwidth + activeTelecommand.bandwidthUsage <= activePass.availableBandwidth)
        {
          if (!passSum && activeTelecommand.bandwidthUsage > activePass.availableBandwidth){
            this.additionFailureStr = 'Error: Cannot add telecommand to queue. Telecommand bandwidth usage exceeds the maximum bandwidth limitation in one pass.'
            break;
          }
          calcTransID = activePasses[i].passID;
          if (!passSum) {
            console.log('pushed from trans', activeTelecommand);
            this.sumTransmissionResults.push({passID: calcTransID, sumBandwidth: activeTelecommand.bandwidthUsage, sumPower: activeTelecommand.powerConsumption});
          }
          break;
        }
      }
      if (!calcTransID) {
        // TODO: if it fits in no existing passes, create a new pass and plop this telecommand in there.
        if (this.additionFailureStr === "") this.additionFailureStr = 'No passes currently exist that will contain the requested telecommand(s). Create a new pass or modify the maximum pass limits and try again.';
        return [-1,-1];
      }
    }

    // gets the index of the stored values to change
    var sumTransmissionResultsIndex = this.sumTransmissionResults.findIndex(x => x.passID == calcTransID);
    var sumExecutionResultsIndex = this.sumExecutionResults.findIndex(x => x.passID == calcExecID);

    var sumTransmissionResultToModify = this.sumTransmissionResults[sumTransmissionResultsIndex]
    sumTransmissionResultToModify.sumBandwidth += activeTelecommand.bandwidthUsage;
    this.sumTransmissionResults[sumTransmissionResultsIndex] = sumTransmissionResultToModify;

    var sumExecutionResultToModify = this.sumExecutionResults[sumExecutionResultsIndex];
    sumExecutionResultToModify.sumPower += activeTelecommand.powerConsumption;
    this.sumExecutionResults[sumExecutionResultsIndex] = sumExecutionResultToModify;

    console.log(this.sumExecutionResults);
    console.log(this.sumTransmissionResults);
    return [calcTransID, calcExecID];
  }
}
