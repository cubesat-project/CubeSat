import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Telecommand } from 'src/classes/telecommand';

@Component({
  selector: 'app-telecommand-dropdown',
  templateUrl: './telecommand-dropdown.component.html',
  styleUrls: ['./telecommand-dropdown.component.scss']
})
export class TelecommandDropdownComponent implements OnInit {

  @Input() selectedTelecommand: Telecommand;
  @Input() telecommands: Telecommand[];
  @Output() newSelectedTelecommand = new EventEmitter<Telecommand>();


  constructor() { }

  ngOnInit() {
  }

  updateTelecommand(id: number) : void
  {
    this.selectedTelecommand = this.telecommands.find(x => x.telecommandID == id);
    this.newSelectedTelecommand.emit(this.selectedTelecommand);
  }
}
