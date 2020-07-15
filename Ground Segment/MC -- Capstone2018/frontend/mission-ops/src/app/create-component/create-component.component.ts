import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { System } from 'src/classes/system';
import { Component as CubeSatComp } from 'src/classes/component';
import { AlertComponent } from 'src/app/alert/alert.component';

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.scss']
})
export class CreateComponentComponent implements OnInit {

  @Input()
  createCompForm: FormGroup;
  public system: System;
  isEditing: boolean;
  selectedComponent: CubeSatComp;
  modalTitle: string;
  modalSubmit: string;
  @ViewChild(AlertComponent)
  private alert: AlertComponent;

  constructor(public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder) 
  { }

  ngOnInit() {
    if (!this.isEditing) {
      this.modalTitle = "Add New Component";
      this.modalSubmit = "Add New Component";
    } else {
      this.modalTitle = "Modify Component";
      this.modalSubmit = "Save Changes";
    }
    this.createForm();
  }

  private createForm() : void
  {
    this.createCompForm = this.formBuilder.group({
      system: '',
      name: this.isEditing ? this.selectedComponent.name : ''
    });
  }

  private isFormValid(newComp: CubeSatComp) : boolean
  {
    this.alert.hide();
    if (newComp.name.trim() == "")
    {
      this.alert.show('Error', 'Component must have a name.');
      return false;
    }

    return true;
  }

  submitNewComp() : void
  {
    this.alert.hide();
    if (!this.isEditing){
      var newComp = new CubeSatComp(this.system.systemID, this.createCompForm.value.name);
      if (!this.isFormValid(newComp)) return;
      this.activeModal.close(newComp);
    } else {
      this.selectedComponent.name = this.createCompForm.value.name;
      if (!this.isFormValid(this.selectedComponent)) return;
      this.activeModal.close(this.selectedComponent);
    }
  }

  closeModal() : void
  {
    this.activeModal.close('closed');
  }
}
