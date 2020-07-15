import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { User } from 'src/classes/user';
import { UsersService } from 'src/app/services/users/users.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AlertComponent } from '../alert/alert.component';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-modify-user',
  templateUrl: './modify-user.component.html',
  styleUrls: ['./modify-user.component.scss']
})
export class ModifyUserComponent implements OnInit {

  @ViewChild('generalAlert')
  private generalAlert: AlertComponent;
  @ViewChild('passwordChangeAlert')
  private passwordChangeAlert: AlertComponent;

  public oldPassword: string;
  public newPassword: string;
  public confirmNewPassword: string;
  public passwordProcessing: boolean = false;

  @ViewChild(ModalComponent)
  private modal: ModalComponent;

  public user: User;

  private processing: boolean = false;

  constructor(private route: ActivatedRoute, private users: UsersService, private auth: AuthService, private location: Location) { }

  ngOnInit() {
    const userId = this.route.snapshot.queryParamMap.get('id');
    this.users.getUser(userId).subscribe((u) => {
      this.user = u;
    }, (err) => {
      console.log(err);
    });
  }

  /**
   * Saves the changes made in the form, and shows the alert to show
   * the status of the operations.
   *
   * @memberof ModifyUserComponent
   */
  public saveChanges(): void {
    // TODO: validate form values

    this.generalAlert.hide();
    this.processing = true;

    this.users.updateUser(this.user).subscribe(() => {
      this.generalAlert.show('Success!', 'User was updated successfully.', 'success')
    }, (err) => {
      this.generalAlert.show(err.name, err.message, 'danger');
      this.processing = false;
    }, () => {
      this.processing = false;
    })
  }

  /**
   * Routes back to the previous page.
   *
   * @memberof ModifyUserComponent
   */
  public goBack(): void {
    this.location.back();
  }

  /**
   * Resets the user's password.
   *
   * @memberof ModifyUserComponent
   */
  public resetPassword(): void {
    this.generalAlert.hide();
    this.users.resetUserPassword(this.user).subscribe(() => {
      this.generalAlert.show('Success!', `Password has been reset. ${this.user.email} will be prompted to change their password when they next log in.`, 'success');
    }, (err) => {
      this.generalAlert.show(err.name, err.message, 'danger');
    });
  }

  /**
   * Prompts the user to change their password.
   *
   * @memberof ModifyUserComponent
   */
  public promptChangePassword(): void {
    this.modal.open();
  }

  /**
   * Initiates the changing of the user's password.
   * Validates the input data and displays any errors to the user.
   *
   * @returns {void}
   * @memberof ModifyUserComponent
   */
  public changePassword(): void {
    this.passwordProcessing = true;
    this.passwordChangeAlert.hide();

    let errorList: Array<string> = [];
    if (!this.oldPassword) {
      errorList.push('Current Password field cannot be blank.');
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
      this.passwordChangeAlert.show('Error', errorList);
      this.passwordProcessing = false;
      return;
    }

    this.auth.changePassword(this.oldPassword, this.newPassword).subscribe(() => {
      this.passwordProcessing = false;
      this.modal.close();
      this.generalAlert.show('Success!', 'Your password has been changed successfully', 'success');
    }, (err) => {
      this.passwordChangeAlert.show(err.name, err.message);
      this.passwordProcessing = false;
    })
  }
}
