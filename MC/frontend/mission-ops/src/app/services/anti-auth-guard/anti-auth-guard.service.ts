import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthService } from '../auth/auth.service';

/**
 * Guards a route against authenticates users, redirecting them to the root page
 * if they are authenticated. This is mainly for use in the login page to prevent
 * it from being accessed by already signed in users.
 *
 * @export
 * @class AntiAuthGuardService
 * @implements {CanActivate}
 */
@Injectable({
  providedIn: 'root'
})
export class AntiAuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }
  
  /**
   * Determines whether or not there is a user currently signed in, returning
   * false if they are authenticated, and true otherwise.
   *
   * @returns {boolean}
   * @memberof AntiAuthGuardService
   */
  public canActivate(): boolean {
    if (this.auth.isAuthenticated()) {
      this.router.navigateByUrl('/');
      return false;
    } else {
      return true;
    }
  }
}
