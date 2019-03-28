import { Injectable } from '@angular/core';
import { Observable, never } from 'rxjs';
import { System } from 'src/classes/system';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { retry, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  private systemUrl = `${env.apiRouteBase}/systems`;

  getSystems(): Observable<System[]>
  {
    return this.http.get<System[]>(this.systemUrl)
            .pipe(
              retry(3),
              catchError(val => {
                this.handleRequestError(val, "retrieving");
                return never();
              })
            );
  }

  createSystem(system: System): Observable<Number> 
  {
    return this.http.post<Number>(this.systemUrl, JSON.stringify(system), this.httpOptions)
            .pipe(
              retry(3),
              catchError(val => {
                this.handleRequestError(val, "creating");
                return never();
              })
            );
  }

  updateSystem(system: System): Observable<Number>
  {
    return this.http.put<Number>(`${this.systemUrl}/${system.systemID}`, JSON.stringify(system), this.httpOptions)
            .pipe(
              retry(3),
              catchError(val => {
                this.handleRequestError(val, "updating");
                return never();
              })
            );
  }

  removeSystem(system: System): Observable<System> 
  {
    return this.http.delete<System>(`${this.systemUrl}/${system.systemID}`)
            .pipe(
              retry(3),
              catchError(val => {
                this.handleRequestError(val, "deleting");
                return never();
              })
            );
  }

  private handleRequestError(error, eventType: string){
    this.toastr.error(`Error on ${eventType} System: ${error.statusText} (Status ${error.status})`, "Server error!");
  }
}
