import { Component, OnInit, Input } from '@angular/core';
import { Telecommand } from 'src/classes/telecommand';

@Component({
  selector: 'app-telecommand-details',
  templateUrl: './telecommand-details.component.html',
  styleUrls: ['./telecommand-details.component.scss']
})
export class TelecommandDetailsComponent implements OnInit {
  
  @Input() telecommand: Telecommand;
  @Input() existingTelecommand: boolean;

  constructor() {
   }

  ngOnInit() {
  }
}
