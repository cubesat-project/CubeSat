import { Injectable } from '@angular/core';
import { Observable, never } from 'rxjs';
import { ComponentTelemetry } from 'src/classes/component-telemetry';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { catchError, retry } from 'rxjs/operators';

/**
 * Service handling all {@link ComponentTelemetry} app server routing.
 */
@Injectable({
  providedIn: 'root'
})
export class ComponentTelemetryService {

  /**
   * Creates a new instance of {@link ComponentTelemetryService}.
   * @param http The HttpClient service.
   */
  constructor(private http: HttpClient, private toastr: ToastrService) { }

  /**
   * Route URL for component telemetries.
   */
  private componentTelemetryUrl = `${env.apiRouteBase}/component-telemetry`;

  /**
   * Gets all {@link ComponentTelemetry} objects associated with the given {@link Component}
   * ID.
   * @param componentID The ID of the {@link Component}.
   */
  getComponentTelemetries(componentID: number) : Observable<ComponentTelemetry[]>
  {
    return this.http.get<ComponentTelemetry[]>(`${this.componentTelemetryUrl}/${componentID}`)
            .pipe(
              retry(3),
              catchError(val => {
                this.handleRequestError(val, "retrieving");
                return never();
              })
            );
  }

  getComponentTelemetryWithType(telemetryTypeID: number) : Observable<ComponentTelemetry[]>
  {
    const params = {
      'telemetryTypeID': telemetryTypeID.toString()
    }
    return this.http.get<ComponentTelemetry[]>(this.componentTelemetryUrl, { params: params })
            .pipe(
              retry(3),
              catchError(val => {
                this.handleRequestError(val, "retrieving with telemetry type");
                return never();
              })
            );
  }

  /**
   * Saves the given {@link ComponentTelemetry} in the 'componentTelemetry' database 
   * table.
   * @param componentTelemetry The new {@link ComponentTelemetry} to save.
   */
  createComponentTelemetry(componentTelemetry: ComponentTelemetry) : Observable<Number>
  {
    return this.http.post<Number>(this.componentTelemetryUrl, componentTelemetry)
            .pipe(
              retry(3),
              catchError(val => {
                this.handleRequestError(val, "creating");
                return never();
              })
            );
  }

  /**
   * Updates the given {@link ComponentTelemetry} in the 'componentTelemetry' database 
   * table.
   * @param componentTelemetry The updated {@link ComponentTelemetry} to save.
   */
  updateComponentTelemetry(componentTelemetry: ComponentTelemetry) : Observable<Number>
  {
    return this.http.put<Number>(`${this.componentTelemetryUrl}/${componentTelemetry.componentTelemetryID}`, componentTelemetry)
            .pipe(
              retry(3),
              catchError(val => {
                this.handleRequestError(val, "updating");
                return never();
              })
            );
  }

  /**
   * Removes the given {@link ComponentTelemetry} from the 'componentTelemetry' database 
   * table.
   * @param componentTelemetry The {@link ComponentTelemetry} to remove.
   */
  removeComponentTelemetry(componentTelemetry: ComponentTelemetry) : Observable<ComponentTelemetry>
  {
    return this.http.delete<ComponentTelemetry>(`${this.componentTelemetryUrl}/${componentTelemetry.componentTelemetryID}`)
            .pipe(
              retry(3),
              catchError(val => {
                this.handleRequestError(val, "deleting");
                return never();
              })
            );
  }

  private handleRequestError(error, eventType: string){
    this.toastr.error(`Error on ${eventType} Component Telemetry: ${error.statusText} (Status ${error.status})`, "Server error!");
  }
}
