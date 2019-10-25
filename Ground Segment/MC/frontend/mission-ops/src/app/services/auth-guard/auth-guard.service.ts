import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthService } from '../auth/auth.service';

/**
 * Guards a route against access from unauthenticated users, redirecting them
 * to the login page if they attempt to access it.
 *
 * @export
 * @class AuthGuardService
 * @implements {CanActivate}
 */
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  /**
   * Determines whether or not there is a user currently signed in, returning true
   * if they are authenticated, and false if they are not.
   *
   * @returns {boolean} True if there is a user currently authenticated, false otherwise.
   * @memberof AuthGuardService
   */
  public canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigateByUrl('/login');
      return false;
    } else {
      return true;
    }
  }
}
