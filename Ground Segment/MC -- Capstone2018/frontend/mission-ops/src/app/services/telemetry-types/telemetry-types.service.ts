import { Injectable } from '@angular/core';
import { Observable, never } from 'rxjs';
import { TelemetryType } from 'src/classes/telemetry-type';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { catchError, retry } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TelemetryTypesService {

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  private telemetryTypeUrl = `${env.apiRouteBase}/telemetry-types`

  getTelemetryTypes() : Observable<TelemetryType[]>
  {
    return this.http.get<TelemetryType[]>(this.telemetryTypeUrl)
            .pipe(
              retry(3),
              catchError(val => {
                this.handleRequestError(val, "retrieving");
                return never();
              }));
  }

  createTelemetryType(telemetryType: TelemetryType) : Observable<TelemetryType>
  {
    return this.http.post<TelemetryType>(this.telemetryTypeUrl, telemetryType)
            .pipe(
              retry(3),
              catchError(val => {
                this.handleRequestError(val, "creating");
                return never();
              })
            );
  }

  updateTelemetryType(telemetryType: TelemetryType) : Observable<any>
  {
    return this.http.put(`${this.telemetryTypeUrl}/${telemetryType.telemetryTypeID}`, telemetryType)
            .pipe(
              retry(3),
              catchError(val => {
                this.handleRequestError(val, "updating");
                return never();
              })
            );
  }

  removeTelemetryType(telemetryType: TelemetryType) : Observable<any>
  {
    return this.http.delete(`${this.telemetryTypeUrl}/${telemetryType.telemetryTypeID}`)
            .pipe(
              retry(3),
              catchError(val => {
                this.handleRequestError(val, "deleting");
                return never();
              })
            );
  }

  private handleRequestError(error, eventType: string){
    this.toastr.error(`Error on ${eventType} Telemetry Type: ${error.statusText} (Status ${error.status})`, "Server error!");
  }
}
