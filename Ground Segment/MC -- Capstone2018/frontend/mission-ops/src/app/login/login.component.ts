import { Component, OnInit, isDevMode, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';

import { AuthService } from 'src/app/services/auth/auth.service';
import { AlertComponent } from '../alert/alert.component';
import { ModalComponent } from '../modal/modal.component';


/**
 * A component for logging a user into the application.
 *
 * @export
 * @class LoginComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginAlert')
  private loginAlert: AlertComponent;
  @ViewChild('newPwdModal')
  private newPwdModal: ModalComponent;
  @ViewChild('resetPwdAlert')
  private resetPwdAlert: AlertComponent;
  @ViewChild('resetPwdModal')
  private resetPwdModal: ModalComponent;

  public email: string;
  public password: string;

  public processing: boolean = false;

  public verificationCode: string;
  public newPassword: string;
  public confirmNewPassword: string;
  public processingNewPassword: boolean;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    if (this.auth.isAuthenticated()) {
      this.router.navigateByUrl('/');
    }
  }

  /**
   * Signs the user into the application using the email and password
   * provided in the input fields. Errors are displayed in a dismissable
   * alert. If the user needs to change their password, a modal is openned
   * to handle that.
   *
   * @returns
   * @memberof LoginComponent
   */
  public signIn() {
    this.processing = true;
    this.loginAlert.hide();

    let errorList = [];
    if (!this.email) {
      errorList.push('Email field cannot be blank.');
    }
    if (!this.password) {
      errorList.push('Password field cannot be blank.');
    }

    if (errorList.length > 0) {
      this.processing = false;
      this.loginAlert.show('Error', errorList, 'danger');
      return;
    }

    this.auth.signIn(this.email, this.password, {
      onSuccess: () => {
        this.processing = false;
        this.router.navigateByUrl('/');
      },
      onFailure: (err: any) => {
        this.processing = false;

        if (err.name === 'PasswordResetRequiredException') {
          // Password reset required, time to open the reset password modal
          this.resetPwdModal.open();
        } else if (isDevMode()) {
          // Only display real error when developing to avoid information leaks
          this.loginAlert.show(err.name, err.message, 'danger');
        } else {
          this.loginAlert.show('Error', 'Email or Password is Incorrect', 'danger');
        }
      },
      mfaRequired: (challengeName: any, challengeParameters: any) => {
        // TODO: expand this to actually support MFA if needed.
        this.processing = false;

        console.log('mfa required');
        console.log(challengeName);
        console.log(challengeParameters);
        return '';
      },
      newPasswordRequired: () => {
        this.processing = false;
        return from(this.newPwdModal.open());
      }
    })
  }

  public resetPassword(): void {
    this.processingNewPassword = true;
    this.resetPwdAlert.hide();
    // TODO: validate input
    let errorList: Array<string> = [];
    if (!this.verificationCode) {
      errorList.push('Verification Code field cannot be blank.');
    }
    if (!this.newPassword) {
      errorList.push('New Password field cannot be blank.');
    }
    if (!this.confirmNewPassword) {
      errorList.push('Confirm New Password field cannot be blank.');
    }
    if (this.newPassword !== this.confirmNewPassword) {
      errorList.push('New Password field and Confirm New Password field must match');
    }

    if (errorList.length > 0) {
      this.resetPwdAlert.show('Error', errorList);
      this.processingNewPassword = false;
      return;
    }

    this.auth.resetPassword(this.verificationCode, this.newPassword).subscribe(() => {
      this.processingNewPassword = false;
      this.resetPwdModal.close();
      this.loginAlert.show('Success!', 'Your password has been reset. Log in with your new password.', 'success');
      this.password = '';
    }, (err) => {
      this.processingNewPassword = false;
      this.resetPwdAlert.show(err.name, err.message);
    });
  }

  public forgotPassword(): void {
    this.loginAlert.hide();
    this.processing = true;

    if (!this.email) {
      this.processing = false;
      this.loginAlert.show('Error', 'Email field cannot be blank.', 'danger');
      return;
    }

    this.auth.forgotPassword(this.email).subscribe(() => {
      this.processing = false;
      this.resetPwdModal.open();
    }, (err) => {
      this.processing = false;
      this.loginAlert.show(err.name, err.message, 'danger');
    });
  }
}
