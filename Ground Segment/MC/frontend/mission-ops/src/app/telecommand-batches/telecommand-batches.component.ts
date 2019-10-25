import { Component, OnInit } from '@angular/core';
import { TelecommandBatch } from 'src/classes/telecommandBatch';
import { TelecommandBatchService } from 'src/app/services/telecommandBatch/telecommand-batch.service';
import { PresetTelecommand } from 'src/classes/presetTelecommand';
import { PresetTelecommandService } from 'src/app/services/presetTelecommand/preset-telecommand.service';
import { Telecommand } from 'src/classes/telecommand';
import { TelecommandService } from 'src/app/services/telecommand/telecommand.service';

@Component({
  selector: 'app-telecommand-batches',
  templateUrl: './telecommand-batches.component.html',
  styleUrls: ['./telecommand-batches.component.scss']
})
export class TelecommandBatchesComponent implements OnInit {

  telecommandBatches: TelecommandBatch[];
  selectedBatch: TelecommandBatch;
  selectedPresetTelecommands: PresetTelecommand[];
  telecommands: Telecommand[];
  selectedTelecommand: Telecommand;

  constructor(private telecommandBatchService: TelecommandBatchService, private presetTelecommandService: PresetTelecommandService, private telecommandService: TelecommandService) { }

  ngOnInit() {
    this.getTelecommandBatches();
    this.getTelecommands();
  }

  saveBatchName(): void{
    this.telecommandBatchService.updateTelecommandBatch(this.selectedBatch)
    .subscribe(results => { /* dont need to do anything for the momment */});
  }

  addNewTelecommandBatch() : void{
    var newTelecommandBatch = new TelecommandBatch("New Telecommand Batch");
    this.telecommandBatchService.createNewTelecommandBatch(newTelecommandBatch)
      .subscribe(results =>{
        this.getTelecommandBatches();
      });
  }

  onSelect(batch: TelecommandBatch): void {
    this.selectedBatch = batch;
    
    // get the preset telecommands for the newly selected batch
    this.presetTelecommandService.getPresetTelecommands(batch.batchID)
      .subscribe(presetTelecommands => this.selectedPresetTelecommands = presetTelecommands);
  }

  reloadPresetTelecommands(){
    this.presetTelecommandService.getPresetTelecommands(this.selectedBatch.batchID)
      .subscribe(presetTelecommands => this.selectedPresetTelecommands = presetTelecommands);
  }

  getTelecommandBatches(): void {
    this.selectedPresetTelecommands = [];
    this.selectedBatch = null;
    this.telecommandBatchService.getTelecommandBatches()
      .subscribe(batches => this.telecommandBatches = batches);
  }

  deleteBatch(): void{
    this.telecommandBatchService.deleteTelecommandBatch(this.selectedBatch.batchID)
      .subscribe(results => {
        this.getTelecommandBatches();
      });
  }

  getTelecommands(): void{
    this.telecommandService.getTelecommands()
      .subscribe(telecommands =>{
        this.telecommands = telecommands;
        if (this.telecommands.length > 0)
        {
          this.selectedTelecommand = this.telecommands[0];
        }
      });
  }

  addNewPresetTelecommand(): void{
    var newPresetTelecommand = new PresetTelecommand(this.selectedTelecommand.telecommandID, this.selectedBatch.batchID);
    newPresetTelecommand.commandParameters = this.selectedTelecommand.command;
    newPresetTelecommand.priorityLevel = this.selectedTelecommand.defaultPriorityLevel;
    newPresetTelecommand.minuteDelay = 0;
    newPresetTelecommand.hourDelay = 0;
    newPresetTelecommand.dayDelay = 0;

    this.presetTelecommandService.addNewPresetTelecommand(newPresetTelecommand)
      .subscribe(results =>{
        this.reloadPresetTelecommands();
      });
  }

  updateSelectedTelecommand(newSelected: Telecommand)
  {
    this.selectedTelecommand = newSelected;
  }
}
