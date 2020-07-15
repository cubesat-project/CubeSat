import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Telecommand } from 'src/classes/telecommand';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TelecommandBatch } from 'src/classes/telecommandBatch';
import * as moment from 'moment';
import { AlertComponent } from 'src/app/alert/alert.component';

@Component({
  selector: 'app-create-queued-telecommand',
  templateUrl: './create-queued-telecommand.component.html',
  styleUrls: ['./create-queued-telecommand.component.scss']
})
export class CreateQueuedTelecommandComponent implements OnInit {

  @Input()
  createQtcForm: FormGroup;
  modalTitle: string;
  modalSubmit: string;
  isBatch: boolean;
  @ViewChild(AlertComponent)
  private alert: AlertComponent;

  public telecommands: Telecommand[];
  public telecommandBatches: TelecommandBatch[];

  selectedTelecommand: Telecommand;
  selectedTelecommandBatch: TelecommandBatch;

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder, public auth: AuthService)
  { }

  ngOnInit() {
    if (!this.isBatch){
      this.modalTitle = "Add Telecommand to Queue";
      this.updateTelecommand(this.telecommands[0].telecommandID);
    } else {
      this.modalTitle = "Add Telecommand Batch to Queue";
      this.updateTelecommandBatch(this.telecommandBatches[0].batchID);
    }
    this.modalSubmit = "Add to Queue";
    this.createForm();
  }

  private createForm() : void
  {
    var executionDate = moment().utc(false).add(1, 'days').hours(0).minutes(0).seconds(0);

    if (!this.isBatch) {
      this.createQtcForm = this.formBuilder.group({
        telecommandID: this.selectedTelecommand.telecommandID,
        priorityLevel: this.selectedTelecommand.defaultPriorityLevel,
        executionDate: executionDate,
        commandParams: this.selectedTelecommand.command,
      });
    } else {
      this.createQtcForm = this.formBuilder.group({
        telecommandBatchID: this.selectedTelecommandBatch.batchID,
        priorityLevel: false,
        executionDate: executionDate,
      });
    }
  }

  private isFormValid(){
    var executionDate = moment(this.createQtcForm.value.executionDate).utc(true);
    this.alert.hide();
    var errorMessages: string[] = [];

    if (this.isBatch && !this.createQtcForm.value.telecommandBatchID)
    {
      errorMessages.push("A telecommand batch must be selected.");
    }

    if (!this.isBatch && !this.createQtcForm.value.telecommandID)
    {
      errorMessages.push("A telecommand must be selected.");
    }

    if (!executionDate.isAfter(moment()))
    {
      var addWord = "";
      if (this.isBatch) {
        addWord = "batch";
      }
      errorMessages.push(`A telecommand ${addWord} must be scheduled in the future, not the past.`);
    }

    if (!this.isBatch && !this.isJSON(this.createQtcForm.value.commandParams))
    {
      errorMessages.push("Command parameters must be specified and be valid JSON.");
    }

    if (errorMessages.length > 0) {
      this.alert.show('Error', errorMessages);
      return false;
    } else {
      return true;
    }
  }

  private isJSON(str) :boolean {  
    try {
      var obj = JSON.parse(str);
      return !!obj && typeof(obj) === 'object';
    } catch (e) {
      /* ignore */
    }
  
    return false;
  }

  updateTelecommand(id: number) : void
  {
    this.selectedTelecommand = this.telecommands.find(x => x.telecommandID == id);
  }

  updateTelecommandBatch(id: number) : void
  {
    this.selectedTelecommandBatch = this.telecommandBatches.find(x => x.batchID == id);
  }

  submitQtc() : void
  {
    if (!this.isFormValid()) return;
    this.activeModal.close(this.createQtcForm.value);
  }

  closeModal() : void
  {
    this.activeModal.close('closed');
  }

}
