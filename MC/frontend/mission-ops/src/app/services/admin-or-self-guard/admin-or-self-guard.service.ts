import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

import { AuthService } from '../auth/auth.service';

/**
 * Guards a route against access from non-adminstrators, with the exception
 * of the user who's id is in the query params of the route. This is to allow
 * for pages that should only be viewed by an administrator or the user they
 * are about.
 *
 * @export
 * @class AdminOrSelfGuardService
 * @implements {CanActivate}
 */
@Injectable({
  providedIn: 'root'
})
export class AdminOrSelfGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  /**
   * Determines if the user attempting to access this route is an administrator
   * or the user who this page is about. Returns true if they are an administrator
   * or the user this page is about, false otherwise.
   *
   * @param {ActivatedRouteSnapshot} route Information about the currently activated route.
   * @returns {boolean} True if the user is an administrator or the user this page is about, false otherwise.
   * @memberof AdminOrSelfGuardService
   */
  public canActivate(route: ActivatedRouteSnapshot): boolean {
    const user = this.auth.getCurrentUser();
    if (!user.administrator && user.id !== route.queryParamMap.get('id')) {
      // The user isn't an admin and isn't the user this page is about
      this.router.navigateByUrl('error/access-denied');
      return false;
    } else {
      return true;
    }
  }
}
