import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';

import { System } from 'src/classes/system';
import { AlertComponent } from 'src/app/alert/alert.component';

@Component({
  selector: 'app-create-system',
  templateUrl: './create-system.component.html',
  styleUrls: ['./create-system.component.scss']
})
export class CreateSystemComponent implements OnInit {

  @Input()
  createSysForm: FormGroup;
  isEditing: boolean;
  selectedSystem: System;
  modalTitle: string;
  modalSubmit: string;
  @ViewChild(AlertComponent)
  private alert: AlertComponent;

  constructor(public activeModal: NgbActiveModal, 
    private formBuilder: FormBuilder) 
  { }

  ngOnInit() {
    if (!this.isEditing) {
      this.modalTitle = "Add New System";
      this.modalSubmit = "Add New System";
    } else {
      this.modalTitle = "Modify System";
      this.modalSubmit = "Save Changes";
    }
    this.createForm();
  }

  private createForm() : void
  {
    this.createSysForm = this.formBuilder.group({
      systemName: this.isEditing ? this.selectedSystem.systemName : ''
    });
  }

  private isFormValid(newSystem: System) : boolean
  {
    this.alert.hide();
    if (newSystem.systemName.trim() == "")
    {
      this.alert.show('Error', 'System must have a name.');
      return false;
    }

    return true;
  }

  submitNewSys() : void
  {
    this.alert.hide();
    if (!this.isEditing){
      var newSys = new System(this.createSysForm.value.systemName);
      if (!this.isFormValid(newSys)) return;
      this.activeModal.close(newSys);
    } else {
      this.selectedSystem.systemName = this.createSysForm.value.systemName;
      if (!this.isFormValid(this.selectedSystem)) return;
      this.activeModal.close(this.selectedSystem);
    }
  }

  closeModal() : void
  {
    this.activeModal.close('closed');
  }
}
