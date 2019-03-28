import { Injectable } from '@angular/core';
import { Observable, never } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subscription } from 'src/classes/subscription';
import { environment as env } from 'src/environments/environment';
import { retry, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionsService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  private systemUrl = `${env.apiRouteBase}/subscriptions`;

  getSubscriptions(userID): Observable<Subscription[]>
  {
    return this.http.get<Subscription[]>(`${this.systemUrl}/${userID}`)
            .pipe(
              retry(3),
              catchError(val => {
                this.handleRequestError(val, "retrieving");
                return never();
              })
            );
  }

  addSubscription(systemID: Number, userID: String): Observable<Number>
  {
    return this.http.post<Number>(`${this.systemUrl}/${userID}`, JSON.stringify({"systemID": systemID}), this.httpOptions)
            .pipe(
              retry(3),
              catchError(val => {
                this.handleRequestError(val, "adding");
                return never();
              })
            );
  }

  deleteSubscription(systemID: Number, userID: String): Observable<Subscription>
  {
    return this.http.delete<Subscription>(`${this.systemUrl}/${userID}.${systemID}`)
            .pipe(
              retry(3),
              catchError(val => {
                this.handleRequestError(val, "deleting");
                return never();
              })
            );
  }

  // TO DO: implement ToastrService from service not from within anomaly-subscription component
  private handleRequestError(error, eventType: string){
    this.toastr.error(`Error on ${eventType} Subscription: ${error.statusText} (Status ${error.status})`, "Server error!");
  }
  
}
