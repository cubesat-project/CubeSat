import { Injectable } from '@angular/core';
import { Observable, never } from 'rxjs';
import { TelemetryData } from 'src/classes/telemetry-data';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComponentTelemetryDataService {

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  private telemetryDataUrl = `${env.apiRouteBase}/telemetry-data`;

  getTelemetryData(componentTelemetryID: number): Observable<TelemetryData[]> {
    return this.http.get<TelemetryData[]>(`${this.telemetryDataUrl}/${componentTelemetryID}`)
      .pipe(
        retry(3),
        catchError(val => {
          this.handleRequestError(val, "retrieving");
          return never();
        })
      );
  }

  getTelemetryDataBetween(componentTelemetryID: number, startDate: number, endDate: number) : Observable<TelemetryData[]>
  {
    const params = {
      'startDate': startDate.toString(),
      'endDate': endDate.toString(),
    }

    return this.http.get<TelemetryData[]>(`${this.telemetryDataUrl}/${componentTelemetryID}`, {params: params})
            .pipe(
              retry(3),
              catchError(val => {
                this.handleRequestError(val, "retrieving");
                return never();
              })
            );
  }

  private handleRequestError(error, eventType: string){
    this.toastr.error(`Error on ${eventType} Telemetry Data: ${error.statusText} (Status ${error.status})`, "Server error!");
  }
}
