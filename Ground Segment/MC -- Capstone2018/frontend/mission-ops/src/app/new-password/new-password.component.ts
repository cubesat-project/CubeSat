import { Component, OnInit, ViewChild } from '@angular/core';
import { Subject, Observable } from 'rxjs';

import { IObservable } from 'src/interfaces/iObservable';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit, IObservable<string> {

  public newPassword: string;
  public confirmNewPassword: string;
  private processing: boolean = false;
  private passwordSubject: Subject<string>;
  @ViewChild(AlertComponent)
  private alert: AlertComponent;

  constructor() { 
    this.passwordSubject = new Subject<string>();
  }

  ngOnInit() {
  }

  private changePassword(): void {
    this.processing = true;
    // TODO: validate input
    let errorList: Array<string> = [];
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
      this.alert.show('Error', errorList);
      this.processing = false;
      return;
    }

    this.passwordSubject.next(this.newPassword);

    // Clear password fields for next time
    this.newPassword = '';
    this.confirmNewPassword = '';

    this.processing = false;
  }

  public getObservable(): Observable<string> {
    return this.passwordSubject.asObservable();
  }
}
