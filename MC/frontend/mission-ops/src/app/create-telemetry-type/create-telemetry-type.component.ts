import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { TelemetryType } from 'src/classes/telemetry-type';
import { AlertComponent } from 'src/app/alert/alert.component';

@Component({
  selector: 'app-create-telemetry-type',
  templateUrl: './create-telemetry-type.component.html',
  styleUrls: ['./create-telemetry-type.component.scss']
})
export class CreateTelemetryTypeComponent implements OnInit {

  @Input() createTelemetryTypeForm: FormGroup;
  isEditing: boolean;
  selectedTelemetryType: TelemetryType;
  modalTitle: string;
  modalSubmit: string;
  @ViewChild(AlertComponent)
  private alert: AlertComponent;

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder) { }

  ngOnInit() {
    if (!this.isEditing){
      this.modalTitle = "Add New Telemetry Type";
      this.modalSubmit = "Add New Telemetry Type";
    } else {
      this.modalTitle = "Modify Telemetry Type";
      this.modalSubmit = "Save Changes";
    }
    this.createForm();
  }

  private createForm() : void
  {
    this.createTelemetryTypeForm = this.formBuilder.group({
      name: this.isEditing ? this.selectedTelemetryType.name : "",
      telemetryUnit: this.isEditing ? this.selectedTelemetryType.telemetryUnit : ""
    });
  }

  private isFormValid(newTelemetryType: TelemetryType) : boolean
  {
    this.alert.hide();

    var errorMessages: string[] = [];
    if (newTelemetryType.name.trim() == "")
    {
      errorMessages.push("Telemetry type must have a name.");
    }

    if (newTelemetryType.telemetryUnit.trim() == "")
    {
      errorMessages.push("Telemetry type must specify a unit.");
    }

    if (errorMessages.length > 0) {
      this.alert.show('Error', errorMessages);

      return false;
    }

    return true;
  }

  submitNewTelemetryType() : void
  {
    this.alert.hide();
    if (!this.isEditing){
      var newTT = new TelemetryType(this.createTelemetryTypeForm.value.telemetryUnit, this.createTelemetryTypeForm.value.name)
      if (!this.isFormValid(newTT)) return;
      this.activeModal.close(newTT);
    } else {
      this.selectedTelemetryType.name = this.createTelemetryTypeForm.value.name;
      this.selectedTelemetryType.telemetryUnit = this.createTelemetryTypeForm.value.telemetryUnit;
      if (!this.isFormValid(this.selectedTelemetryType)) return;
      this.activeModal.close(this.selectedTelemetryType);
    }
  }

  closeModal() : void
  {
    this.activeModal.close('closed');
  }

}
