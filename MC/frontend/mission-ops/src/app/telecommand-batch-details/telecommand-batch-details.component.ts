import { Component, OnInit, Input } from '@angular/core';
import { TelecommandBatch } from 'src/classes/telecommandBatch';

@Component({
  selector: 'app-telecommand-batch-details',
  templateUrl: './telecommand-batch-details.component.html',
  styleUrls: ['./telecommand-batch-details.component.scss']
})
export class TelecommandBatchDetailsComponent implements OnInit {

  @Input() batch: TelecommandBatch;
  constructor() { }

  ngOnInit() {
  }

}
