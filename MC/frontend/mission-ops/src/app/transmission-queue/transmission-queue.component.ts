import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Pass } from 'src/classes/pass';
import { PassService } from 'src/app/services/pass/pass.service';
import { QueuedTelecommandService } from 'src/app/services/queuedTelecommand/queued-telecommand.service';
import { QueuedTelecommand } from 'src/classes/queuedTelecommand';
import { Observable, of, empty } from 'rxjs';
import { Telecommand } from 'src/classes/telecommand';
import { User } from 'src/classes/user';
import { UsersService } from 'src/app/services/users/users.service';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { retry, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-transmission-queue',
  templateUrl: './transmission-queue.component.html',
  styleUrls: ['./transmission-queue.component.scss']
})
export class TransmissionQueueComponent implements OnInit {

  @Input() selectedPass: Pass;
  @Input() telecommands: Telecommand[];
  
  private passQueuedTelecommands: QueuedTelecommand[];
  users: User[]

  constructor(private userService: UsersService, 
    private queuedTelecommandService: QueuedTelecommandService,
    private http: HttpClient,
    private toastr: ToastrService) { }

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
    this.queuedTelecommandService.getQueuedTelecommandsTransmission(this.selectedPass)
      .subscribe(qtc => this.passQueuedTelecommands = qtc);
  }

  submitTransmissionQueueToGroundStation(){
      this.http.post(`${env.groundStationIP}/queue/${this.selectedPass.passID}`, { queue: this.passQueuedTelecommands})
      .pipe(
        retry(1),
        catchError(val => {
          this.handleSubmitError(val);
          return empty();
        }))
      .subscribe(_ => {
        this.toastr.success(`Transmitted queue for Pass ${this.selectedPass.passID} to ground station.`, "Success!");
      });
  }

  handleSubmitError(error){
    this.toastr.error(`Error transmitting to the ground station: ${error.statusText} (Status Code ${error.status})`, "Ground station server error!");
  }
}
