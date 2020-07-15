import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { QueuedTelecommand } from 'src/classes/queuedTelecommand';
import { Telecommand } from 'src/classes/telecommand';
import { UsersService } from 'src/app/services/users/users.service';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { QueuedTelecommandService } from 'src/app/services/queuedTelecommand/queued-telecommand.service';
import { User } from 'src/classes/user';
const dateFormat = require('dateformat');

@Component({
  selector: 'app-queued-telecommand',
  templateUrl: './queued-telecommand.component.html',
  styleUrls: ['./queued-telecommand.component.scss']
})
export class QueuedTelecommandComponent implements OnInit {

  @Input() queuedTelecommand: QueuedTelecommand;
  @Input() telecommands: Telecommand[];
  @Input() users: User[];
  @Input() orderRank: number;
  @Input() isInPast: boolean;

  @Output() reloadQueuedTelecommands = new EventEmitter<number>();
  public telecommandDetails: Telecommand; 
  user : User;
  isCollapsed: boolean = true;

  constructor(private userService: UsersService, private queuedTelecommandService: QueuedTelecommandService) {}

  ngOnInit() {
    this.user = this.users.find(x => x.id == this.queuedTelecommand.userID.toString());
  }

  ngOnChanges() {
    this.telecommandDetails = this.telecommands.find(x => x.telecommandID == this.queuedTelecommand.telecommandID);
  }

  getFormatedDate()
  {
    return dateFormat(this.queuedTelecommand.executionTimeUTC, "dddd, mmmm dS, yyyy, HH:MM:ss");
  }

  deleteQueuedTelecommand() : void
  {
    this.queuedTelecommandService.deleteQueuedTelecommand(this.queuedTelecommand)
      .subscribe(results => {
        this.reloadQueuedTelecommands.emit();
      })
  }
}
