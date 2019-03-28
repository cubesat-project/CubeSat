import { Injectable } from '@angular/core';
import { Observable, never } from 'rxjs';
import { Component } from 'src/classes/component';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { retry, catchError } from 'rxjs/operators';

/**
 * Service handling all {@link Component} app server routing.
 */
@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  /**
   * Creates a new instance of {@link ComponentService}.
   * @param http The HttpClient service.
   */
  constructor(private http: HttpClient, private toastr: ToastrService) { }

  /**
   * Route URL for components.
   */
  private componentUrl = `${env.apiRouteBase}/components`;

  /**
   * Gets all {@link Component} objects from the app server.
   */
  getComponents() : Observable<Component[]>
  {
    return this.http.get<Component[]>(this.componentUrl)
            .pipe(
              retry(3),
              catchError(val => {
                this.handleRequestError(val, "retrieving");
                return never();
              })
            );
  }

  /**
   * Gets all {@link Component} objects associated with the given {@link System}
   * ID.
   * @param systemId The ID of the {@link System}.
   */
  getComponentsFromSystem(systemId: number) : Observable<Component[]>
  {
    return this.http.get<Component[]>(`${this.componentUrl}/${systemId}`)
            .pipe(
              retry(3),
              catchError(val => {
                this.handleRequestError(val, "retrieving with system");
                return never();
              })
            );
  }

  /**
   * Saves the given {@link Component} in the 'components' database table.
   * @param component The new {@link Component} to save.
   */
  createComponent(component: Component) : Observable<Number>
  {
    return this.http.post<Number>(this.componentUrl, component)
            .pipe(
              retry(3),
              catchError(val => {
                this.handleRequestError(val, "creating");
                return never();
              })
            );
  }

  /**
   * Updates the given {@link Component} in the 'components' database table.
   * @param component The updated {@link Component} to save.
   */
  updateComponent(component: Component) : Observable<Number>
  {
    return this.http.put<Number>(`${this.componentUrl}/${component.componentID}`, component)
            .pipe(
              retry(3),
              catchError(val => {
                this.handleRequestError(val, "updating");
                return never();
              })
            );
  }

  /**
   * Removes the given {@link Component} from the 'components' database table.
   * @param component The {@link Component} to remove.
   */
  removeComponent(component: Component) : Observable<Component>
  {
    return this.http.delete<Component>(`${this.componentUrl}/${component.componentID}`)
            .pipe(
              retry(3),
              catchError(val => {
                this.handleRequestError(val, "deleting");
                return never();
              })
            );
  }

  private handleRequestError(error, eventType: string){
    this.toastr.error(`Error on ${eventType} Component: ${error.statusText} (Status ${error.status})`, "Server error!");
  }
}
