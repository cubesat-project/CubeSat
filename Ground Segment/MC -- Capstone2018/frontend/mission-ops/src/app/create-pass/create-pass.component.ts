import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Pass } from 'src/classes/pass';
import * as moment from 'moment';
import { AlertComponent } from 'src/app/alert/alert.component';

@Component({
  selector: 'app-create-pass',
  templateUrl: './create-pass.component.html',
  styleUrls: ['./create-pass.component.scss']
})
export class CreatePassComponent implements OnInit {

  @Input() 
  public createPassForm: FormGroup;
  @ViewChild(AlertComponent)
  private alert: AlertComponent;

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() : void
  {
    var passDate = moment().utc(false).add(1, 'days').hours(0).minutes(0).seconds(0);

    var availablePower = 100;
    var availableBandwidth = 1500;

    this.createPassForm = this.formBuilder.group({
      passDate: passDate,
      availablePower: availablePower,
      availableBandwidth: availableBandwidth,
    });
  }

  private isFormValid(newPass: Pass) : boolean
  {
    this.alert.hide();
    var errorMessages: string[] = [];

    var today = new Date().getTime();
    if (newPass.estimatedPassDateTime.getTime() <= today){
      errorMessages.push("Pass must exist in the future. Provide a date and time that exceed the current time.");
    }

    if (!newPass.availablePower || isNaN(newPass.availablePower) || newPass.availablePower < 0)
    {
      errorMessages.push("The available power of a pass must be a positive number.");
    }
    
    if (!newPass.availableBandwidth || isNaN(newPass.availableBandwidth) || newPass.availableBandwidth < 0)
    {
      errorMessages.push("The available bandwidth of a pass must be a positive number.");
    }

    if (errorMessages.length > 0)
    {
      this.alert.show('Error', errorMessages);
      return false;
    } else {
      return true;
    }
  }

  submitPass() : void
  {
    var newPassDate = moment(this.createPassForm.value.passDate).utc(true);
    var newPass = new Pass(newPassDate.toDate(), this.createPassForm.value.availablePower, this.createPassForm.value.availableBandwidth);
    if (!this.isFormValid(newPass)) return;
    this.activeModal.close(newPass);
  }

  closeModal() : void
  {
    this.activeModal.close('closed');
  }

}
