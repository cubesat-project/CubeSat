import { Injectable } from '@angular/core';
import { Observable, never } from 'rxjs';
import { PresetTelecommand } from 'src/classes/presetTelecommand';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PresetTelecommandService {

  private presetTelecommandUrl = `${env.apiRouteBase}/preset-telecommands`

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  getPresetTelecommands(batchID: number) : Observable<PresetTelecommand[]>
  {
    return this.http.get<PresetTelecommand[]>(`${this.presetTelecommandUrl}/${batchID}`)
            .pipe(
              retry(3),
              catchError(val => {
                this.handleRequestError(val, "retrieving");
                return never();
              })
            );
  }

  addNewPresetTelecommand(presetTelecommand: PresetTelecommand): Observable<any>
  {
    return this.http.post(this.presetTelecommandUrl, presetTelecommand)
            .pipe(
              retry(3),
              catchError(val => {
                this.handleRequestError(val, "creating");
                return never();
              })
            );
  }

  updatePresetTelecommand(presetTelecommand: PresetTelecommand) : Observable<any>
  {
    return this.http.put(`${this.presetTelecommandUrl}/${presetTelecommand.presetTelecommandID}`, presetTelecommand)
            .pipe(
              retry(3),
              catchError(val => {
                this.handleRequestError(val, "updating");
                return never();
              })
            );
  }

  deletePresetTelecommand(presetTelecommandID: number) : Observable<any>
  {
    return this.http.delete<PresetTelecommand[]>(`${this.presetTelecommandUrl}/${presetTelecommandID}`)
            .pipe(
              retry(3),
              catchError(val => {
                this.handleRequestError(val, "deleting");
                return never();
              })
            );
  }

  private handleRequestError(error, eventType: string){
    this.toastr.error(`Error on ${eventType} Preset Telecommand: ${error.statusText} (Status ${error.status})`, "Server error!");
  }
}
