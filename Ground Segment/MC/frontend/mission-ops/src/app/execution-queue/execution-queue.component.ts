import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Pass } from 'src/classes/pass';
import { PassService } from 'src/app/services/pass/pass.service';
import { QueuedTelecommand } from 'src/classes/queuedTelecommand';
import { QueuedTelecommandService } from 'src/app/services/queuedTelecommand/queued-telecommand.service';
import { Observable } from 'rxjs';
import { Telecommand } from 'src/classes/telecommand';
import { UsersService } from 'src/app/services/users/users.service';
import { User } from 'src/classes/user';

@Component({
  selector: 'app-execution-queue',
  templateUrl: './execution-queue.component.html',
  styleUrls: ['./execution-queue.component.scss']
})
export class ExecutionQueueComponent implements OnInit {
  
  /**
   * The passes of the CubeSat. Contains information about the commands to be executed
   *
   * @type {Pass[]}
   * @memberof ExecutionQueueComponent
   */

  private passQueuedTelecommands: QueuedTelecommand[];
  @Input() telecommands: Telecommand[];
  @Input() selectedPass: Pass;
  users: User[]
  
  constructor(private userService: UsersService, private queuedTelecommandService: QueuedTelecommandService) { }

  ngOnInit() {
    this.userService.getUsers(Number.MAX_SAFE_INTEGER - 1)
    .subscribe(users => {
      this.users = users.items
      this.reloadQueuedTelecommands();
    });
  }

  ngOnChanges(changes: SimpleChanges) : void
  {
    if (changes.selectedPass && !changes.selectedPass.firstChange)
    {
      this.reloadQueuedTelecommands();
    }
  }

  reloadQueuedTelecommands(){
    this.queuedTelecommandService.getQueuedTelecommandsExecution(this.selectedPass)
      .subscribe(qtc => this.passQueuedTelecommands = qtc);
  }
}
