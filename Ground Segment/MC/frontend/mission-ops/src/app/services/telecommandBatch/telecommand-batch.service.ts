import { Injectable } from '@angular/core';
import { Observable, never } from 'rxjs';
import { TelecommandBatch } from 'src/classes/telecommandBatch';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TelecommandBatchService {

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  private telecommandBatchesUrl = `${env.apiRouteBase}/telecommand-batches`

  getTelecommandBatches() : Observable<TelecommandBatch[]>
  {
    return this.http.get<TelecommandBatch[]>(this.telecommandBatchesUrl)
            .pipe(
              retry(3),
              catchError(val => {
                this.handleRequestError(val, "retrieving");
                return never();
              }));
  }

  createNewTelecommandBatch(newBatch: TelecommandBatch): Observable<any>
  {
    return this.http.post(this.telecommandBatchesUrl, newBatch)
            .pipe(
              retry(3),
              catchError(val => {
                this.handleRequestError(val, "creating");
                return never();
              }));
  }

  updateTelecommandBatch(batch: TelecommandBatch) : Observable<any>
  {
    return this.http.put(`${this.telecommandBatchesUrl}/${batch.batchID}`, batch)
            .pipe(
              retry(3),
              catchError(val => {
                this.handleRequestError(val, "updating");
                return never();
              }));
  }

  deleteTelecommandBatch(batchID: number) : Observable<any>
  {
    return this.http.delete(`${this.telecommandBatchesUrl}/${batchID}`)
            .pipe(
              retry(3),
              catchError(val => {
                this.handleRequestError(val, "deleting");
                return never();
              }));
  }

  private handleRequestError(error, eventType: string){
    this.toastr.error(`Error on ${eventType} Telecommand Batch: ${error.statusText} (Status ${error.status})`, "Server error!");
  }
}
