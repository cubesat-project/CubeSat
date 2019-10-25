import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PresetTelecommand } from 'src/classes/presetTelecommand';
import { PresetTelecommandService } from 'src/app/services/presetTelecommand/preset-telecommand.service';

@Component({
  selector: 'app-preset-telecommand-details',
  templateUrl: './preset-telecommand-details.component.html',
  styleUrls: ['./preset-telecommand-details.component.scss']
})
export class PresetTelecommandDetailsComponent implements OnInit {

  @Input() presetTelecommand: PresetTelecommand;
  @Output() reloadPresetTelecommands = new EventEmitter<number>();
  
  originalPresetTelecommand: PresetTelecommand;
  public isCollapsed = true;

  constructor(private presetTelecommandService: PresetTelecommandService) { }

  ngOnInit() {

    // typescript doesnt allow for multiple constructors...
    // and the object we get back from the service *thinks* its of
    // type presetTelecommand but it doesn't have access to any functions defined in the
    // class so I can even create a method there to do this gross allocation..
    // I know this is gross. I am sad and sorry.
    this.originalPresetTelecommand = new PresetTelecommand(this.presetTelecommand.telecommandID, this.presetTelecommand.batchID);

    this.originalPresetTelecommand.commandParameters = this.presetTelecommand.commandParameters;
    this.originalPresetTelecommand.name = this.presetTelecommand.name;
    this.originalPresetTelecommand.priorityLevel = this.presetTelecommand.priorityLevel;
    this.originalPresetTelecommand.secondDelay = this.presetTelecommand.secondDelay;
    this.originalPresetTelecommand.minuteDelay = this.presetTelecommand.minuteDelay;
    this.originalPresetTelecommand.hourDelay = this.presetTelecommand.hourDelay;
    this.originalPresetTelecommand.dayDelay = this.presetTelecommand.dayDelay;
    this.originalPresetTelecommand.presetTelecommandID = this.presetTelecommand.presetTelecommandID;  }

  savePresetTelecommand(): void{
    this.presetTelecommandService.updatePresetTelecommand(this.presetTelecommand)
      .subscribe(results => { 
        // update the presetTelecommands in case the order has changed due to 
        // relative execution time changes        
        this.reloadPresetTelecommands.emit();
      });
    
  }

  // doing it this way (which is kinda gross) bc I don't want to hit the backend to repopulate this
  discardChanges(): void{
    this.presetTelecommand.commandParameters = this.originalPresetTelecommand.commandParameters;
    this.presetTelecommand.priorityLevel = this.originalPresetTelecommand.priorityLevel;
    this.presetTelecommand.secondDelay = this.originalPresetTelecommand.secondDelay;
    this.presetTelecommand.minuteDelay = this.originalPresetTelecommand.minuteDelay;
    this.presetTelecommand.hourDelay = this.originalPresetTelecommand.hourDelay;
    this.presetTelecommand.dayDelay = this.originalPresetTelecommand.dayDelay;
  }

  deletePresetTelecommand(): void{
    this.presetTelecommandService.deletePresetTelecommand(this.presetTelecommand.presetTelecommandID)
    .subscribe(results => {
      this.reloadPresetTelecommands.emit();
    });
  }

}
