import { Injectable } from '@angular/core';
import { Observable, never } from 'rxjs';
import { Telecommand } from 'src/classes/telecommand';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TelecommandService {

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  private telecommandsUrl = `${env.apiRouteBase}/telecommands`

  getTelecommands() : Observable<Telecommand[]>
  {
    return this.http.get<Telecommand[]>(this.telecommandsUrl)
            .pipe(
              retry(3),
              catchError(val => {
                this.handleRequestError(val, "retrieving");
                return never();
              })
            );
  }

  createTelecommand(telecommand: Telecommand) : Observable<any>{
    return this.http.post(this.telecommandsUrl, telecommand)
            .pipe(
              retry(3),
              catchError(val => {
                this.handleRequestError(val, "creating");
                return never();
              })
            );
  }

  deleteTelecommand(telecommandID : number) : Observable<any>{
    return this.http.delete(`${this.telecommandsUrl}/${telecommandID}`)
            .pipe(
              retry(3),
              catchError(val => {
                this.handleRequestError(val, "deleting");
                return never();
              })
            );
  }

  private handleRequestError(error, eventType: string){
    this.toastr.error(`Error on ${eventType} Telecommand: ${error.statusText} (Status ${error.status})`, "Server error!");
  }
}
