import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthService } from '../auth/auth.service';

/**
 * Guards a route against access from non-administrators, redirecting them to
 * the "access denied" page if they attempt to access it.
 *
 * @export
 * @class AdminGuardService
 * @implements {CanActivate}
 */
@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  /**
   * Determines whether or not the currently signed in user (if there is one) is
   * an administrator, returning true if they are and false otherwise.
   *
   * @returns {boolean} True if the currently signed in user exists and is an administrator, false otherwise.
   * @memberof AdminGuardService
   */
  public canActivate(): boolean {
    if (!this.auth.isAdministrator()) {
      this.router.navigateByUrl('error/access-denied');
      return false;
    } else {
      return true;
    }
  }
}
