import { Injectable } from '@angular/core';
import { Observable, never } from 'rxjs';
import { QueuedTelecommand } from 'src/classes/queuedTelecommand';
import { HttpClient } from '@angular/common/http';
import { Pass } from 'src/classes/pass';
import { environment as env } from 'src/environments/environment';
import { retry, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class QueuedTelecommandService {
  
  private queuedTelecommandsUrl = `${env.apiRouteBase}/queued-telecommands`
  private transmissionQueueUrl = `${env.apiRouteBase}/transmission-queue`
  private executionQueueUrl = `${env.apiRouteBase}/execution-queue`

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  getQueuedTelecommands() : Observable<QueuedTelecommand[]>
  {
    return this.http.get<QueuedTelecommand[]>(this.queuedTelecommandsUrl)
            .pipe(
              retry(3),
              catchError(val => {
                this.handleRequestError(val, "retrieving");
                return never();
              })
            );
  }

  getQueuedTelecommandsTransmission(transmissionPass: Pass) : Observable<QueuedTelecommand[]>
  {
    return this.http.get<QueuedTelecommand[]>(`${this.transmissionQueueUrl}/${transmissionPass.passID}`)
            .pipe(
              retry(3),
              catchError(val => {
                this.handleRequestError(val, "retrieving transmission");
                return never();
              })
            );
  }

  getQueuedTelecommandsExecution(executionPass: Pass) : Observable<QueuedTelecommand[]>
  {
    return this.http.get<QueuedTelecommand[]>(`${this.executionQueueUrl}/${executionPass.passID}`)
            .pipe(
              retry(3),
              catchError(val => {
                this.handleRequestError(val, "retrieving execution");
                return never();
              })
            );
  }

  updatedQueuedTelecommands(queuedTelecommand: QueuedTelecommand) : Observable<any>{
    return this.http.put(`${this.queuedTelecommandsUrl}/${queuedTelecommand.queuedTelecommandID}`, queuedTelecommand)
            .pipe(
              retry(3),
              catchError(val => {
                this.handleRequestError(val, "updating");
                return never();
              })
            );
  }
  
  createBatchQueuedTelecommands(queuedTelecommands: Object[]) : Observable<any>
  {
    return this.http.post(this.queuedTelecommandsUrl, queuedTelecommands)
            .pipe(
              retry(3),
              catchError(val => {
                this.handleRequestError(val, "creating batch");
                return never();
              })
            );
  }

  deleteQueuedTelecommand(queuedTelecommand: QueuedTelecommand) : Observable<any> 
  {
    return this.http.delete(`${this.queuedTelecommandsUrl}/${queuedTelecommand.queuedTelecommandID}`)
            .pipe(
              retry(3),
              catchError(val => {
                this.handleRequestError(val, "deleting");
                return never();
              })
            );
  }

  private handleRequestError(error, eventType: string){
    this.toastr.error(`Error on ${eventType} Queued Telecommand: ${error.statusText} (Status ${error.status})`, "Server error!");
  }
}
