import { Component, OnInit, ViewChild } from '@angular/core';
import { SystemService } from 'src/app/services/system/system.service';
import { System } from 'src/classes/system';
import { Component as CubeSatComp } from 'src/classes/component';
import { ComponentService } from 'src/app/services/component/component.service';
import { ComponentTelemetryService } from 'src/app/services/component-telemetry/component-telemetry.service';
import { ComponentTelemetry } from 'src/classes/component-telemetry';
import { TelemetryType } from 'src/classes/telemetry-type';
import { TelemetryTypesService } from 'src/app/services/telemetry-types/telemetry-types.service';
import { CreateSystemComponent } from '../create-system/create-system.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateComponentComponent } from '../create-component/create-component.component';
import { CreateComponentTelemetryComponent } from '../create-component-telemetry/create-component-telemetry.component';
import { ModalComponent } from '../modal/modal.component';
import { ToastrService } from 'ngx-toastr';
import { CreateTelemetryTypeComponent } from '../create-telemetry-type/create-telemetry-type.component';

/**
 * Manages CubeSat system inputs, i.e. the systems, components and component telemetries to organize 
 * feedback from the CubeSat.
 */
@Component({
  selector: 'app-cubesat-sys-inputs',
  templateUrl: './cubesat-sys-inputs.component.html',
  styleUrls: ['./cubesat-sys-inputs.component.scss']
})
export class CubesatSysInputsComponent implements OnInit {
  @ViewChild('deleteSystemModal')
  private deleteSystemModal: ModalComponent;
  @ViewChild('deleteComponentModal')
  private deleteComponentModal: ModalComponent;
  @ViewChild('deleteCompTelemModal')
  private deleteCompTelemModal: ModalComponent;
  @ViewChild('deleteTelemetryTypeModal')
  private deleteTelemetryTypeModal: ModalComponent;

  systems: System[];
  components: CubeSatComp[];
  selectedSystem: System;
  selectedComponent: CubeSatComp;
  compTelemetries: ComponentTelemetry[];
  selectedCompTelem: ComponentTelemetry;
  selectedTelemetryType: TelemetryType;
  telemetryTypes: TelemetryType[];

  /**
   * Creates a new instance of {@link CubesatSysInputsComponent}.
   * @param systemService An instance of the {@link SystemService}.
   * @param componentService An instance of the {@link ComponentService}.
   * @param compTelemetriesService An instance of the {@link ComponentTelemetryService}.
   * @param telemetryTypesService An instance of the {@link TelemetryTypesService}.
   * @param modalService An instance of the {@link NgbModal}.
   */
  constructor(private systemService: SystemService, 
              private componentService: ComponentService,
              private compTelemetriesService: ComponentTelemetryService,
              private telemetryTypesService: TelemetryTypesService,
              private modalService: NgbModal,
              private toastr: ToastrService) 
              { }

  ngOnInit() {
    this.getSystems();
    this.getTelemetryTypes();
  }

  promptAddTelemetryType() : void
  {
    const modalRef = this.modalService.open(CreateTelemetryTypeComponent);
    modalRef.componentInstance.isEditing = false;
    modalRef.result.then((result) => {
      this.telemetryTypesService.createTelemetryType(result)
        .subscribe(_ => {
          this.getTelemetryTypes();
        });
    }).catch((error) => {
      // Modal closed without submission
      console.log(error);
    });
  }

  promptEditTelemetryType() : void
  {
    const modalRef = this.modalService.open(CreateTelemetryTypeComponent);
    modalRef.componentInstance.isEditing = true;
    modalRef.componentInstance.selectedTelemetryType = this.selectedTelemetryType;
    modalRef.result.then((result) => {
      this.telemetryTypesService.updateTelemetryType(result)
        .subscribe(_ => { });
    }).catch((error) => {
      // Modal closed without submission
      console.log(error);
    });
  }

  /**
   * Generates and handles the modal to add a {@link System} element.
   */
   promptAddSystem(): void 
   {
     const modalRef = this.modalService.open(CreateSystemComponent);
     modalRef.componentInstance.isEditing = false;
     modalRef.result.then((result) => {
       this.systemService.createSystem(result)
        .subscribe(sys => {
          this.getSystems();
        });
     }).catch((error) => {
       // Modal closed without submission
       console.log(error);
     });
   }

   /**
    * Generates and handles the modal to modify the selected {@link System} element.
    */
   promptEditSystem() : void
   {
     const modalRef = this.modalService.open(CreateSystemComponent);
     modalRef.componentInstance.isEditing = true;
     modalRef.componentInstance.selectedSystem = this.selectedSystem;
     modalRef.result.then((result) => {
       this.systemService.updateSystem(result)
        .subscribe(sys => { });
     }).catch((error) => {
       // Modal closed without submission
       console.log(error);
     })
   }

   /**
    * Generates and handles the modal to add a {@link Component} element within the
    * currently selected {@link System}.
    */
   promptAddComponent() : void
   {
     const modalRef = this.modalService.open(CreateComponentComponent);
     modalRef.componentInstance.system = this.selectedSystem;
     modalRef.componentInstance.isEditing = false;
     modalRef.result.then((result) => {
       this.componentService.createComponent(result)
        .subscribe(comp => {
          this.getComponents(result.systemID);
        })
     }).catch((error) => {
      // Modal closed without submission
      console.log(error);
    });
   }

   /**
    * Generates and handles the modal to modify a {@link Component} element within the
    * currently selected {@link System}.
    */
   promptEditComponent() : void
   {
     const modalRef = this.modalService.open(CreateComponentComponent);
     modalRef.componentInstance.system = this.selectedSystem;
     modalRef.componentInstance.isEditing = true;
     modalRef.componentInstance.selectedComponent = this.selectedComponent;
     modalRef.result.then((result) => {
       this.componentService.updateComponent(result)
        .subscribe(sys => { });
     }).catch((error) => {
       // Modal closed without submission
       console.log(error);
     })
   }

   /**
    * Generates and handles the modal to add a {@link ComponentTelemetry} element within the
    * currently selected {@link Component}.
    */
   promptAddCompTelem() : void
   {
     const modalRef = this.modalService.open(CreateComponentTelemetryComponent);
     modalRef.componentInstance.system = this.selectedSystem;
     modalRef.componentInstance.component = this.selectedComponent;
     modalRef.componentInstance.telemetryTypes = this.telemetryTypes;
     modalRef.componentInstance.isEditing = false;
     modalRef.result.then((result) => {
       this.compTelemetriesService.createComponentTelemetry(result)
        .subscribe(compTelem => { 
          this.getCompTelemetries(result.componentID);
        })
     }).catch((error) => {
       // Modal closed without submission
       console.log(error);
     });
   }

   /**
    * Generates and handles the modal to modify a {@link ComponentTelemetry} element within the
    * currently selected {@link Component}.
    */
   promptEditCompTelem() : void
   {
     const modalRef = this.modalService.open(CreateComponentTelemetryComponent);
     modalRef.componentInstance.system = this.selectedSystem;
     modalRef.componentInstance.component = this.selectedComponent;
     modalRef.componentInstance.telemetryTypes = this.telemetryTypes;
     modalRef.componentInstance.isEditing = true;
     modalRef.componentInstance.selectedCompTelem = this.selectedCompTelem;
     modalRef.result.then((result) => {
       this.compTelemetriesService.updateComponentTelemetry(result)
        .subscribe(compTelem => { })
     }).catch((error) => {
       // Modal closed without submission
       console.log(error);
     });
   }

  promptDeleteTelemetryType() : void
  {
    this.deleteTelemetryTypeModal.open();
  }

  /**
  * Generates and handles the modal to delete the selected {@link System} element.
  */
  promptDeleteSystem(): void {
    this.deleteSystemModal.open();
  }

  /**
  * Generates and handles the modal to delete the selected {@link Component} element.
  */
  promptDeleteComponent(): void {
    this.deleteComponentModal.open();
  }

  /**
  * Generates and handles the modal to delete the selected {@link ComponentTelemetry} element.
  */
  promptDeleteCompTelem(): void {
    this.deleteCompTelemModal.open();
  }

  onSelectTelemetryType(telemetryType: TelemetryType) : void
  {
    this.selectedTelemetryType = telemetryType;
  }

  /**
   * Resets selected elements and refreshes list of {@link Component}s when a 
   * {@link System} is selected.
   * @param system The selected {@link System}.
   */
  onSelectSys(system: System) : void
  {
    this.selectedSystem = system;
    this.selectedComponent = null;
    this.selectedCompTelem = null;
    this.getComponents(this.selectedSystem.systemID);
  }

  /**
   * Resets selected elements and refreshes list of {@link ComponentTelemetry}s when 
   * a {@link Component} is selected.
   * @param component The selected {@link Component}.
   */
  onSelectComp(component: CubeSatComp) : void
  {
    this.selectedComponent = component;
    this.selectedCompTelem = null;
    this.getCompTelemetries(this.selectedComponent.componentID);
  }

  /**
   * Sets the selected {@link ComponentTelemetry} element.
   * @param compTelem The selected {@link ComponentTelemetry}.
   */
  onSelectCompTelem(compTelem: ComponentTelemetry): void
  {
    this.selectedCompTelem = compTelem;
  }

  /**
   * Retrieves all of the {@link System}s in the CubeSat, and resets
   * selected elements.
   */
  getSystems(): void {
    this.systemService.getSystems()
      .subscribe(systems => {
        this.systems = systems;
        this.selectedSystem = null;
        this.selectedComponent = null;
        this.selectedCompTelem = null;
      });
  }

  /**
   * Retrieves all of the {@link Component}s associated with the given {@link System} ID,
   * and resets selected elements.
   * @param systemId The ID of the current {@link System}.
   */
  getComponents(systemId: number): void {
    this.componentService.getComponentsFromSystem(systemId)
      .subscribe(components => {
        this.components = components;
        this.selectedComponent = null;
        this.selectedCompTelem = null;
      });
  }

  /**
   * Retrieves all of the {@link ComponentTelemetry}s associated with the given
   * {@link Component} ID, and resets selected elements.
   * @param componentId The ID of the current {@link Component}.
   */
  getCompTelemetries(componentId: number): void
  {
    this.compTelemetriesService.getComponentTelemetries(componentId)
      .subscribe(compTelems => {
        this.compTelemetries = compTelems;
        this.selectedCompTelem = null;
      });
  }

  /**
   * Retrieves all saved {@link TelemetryType}s.
   */
  getTelemetryTypes(): void
  {
    this.telemetryTypesService.getTelemetryTypes()
      .subscribe(telemTypes => this.telemetryTypes = telemTypes);
  }

  /**
   * @returns The {@link TelemetryType} associated with the given ID.
   * @param telemetryTypeId The specific {@link TelemetryType} ID.
   */
  getTelemetryType(telemetryTypeId: number) : TelemetryType
  {
    return this.telemetryTypes.find(x => x.telemetryTypeID == telemetryTypeId);
  }

  deleteTelemetryType() : void
  {
    if (!this.selectedTelemetryType) return;
    this.compTelemetriesService.getComponentTelemetryWithType(this.selectedTelemetryType.telemetryTypeID)
      .subscribe(cts => {
        if (cts.length > 0) {
          this.toastr.error('Error: cannot delete telemetry type when it is associated with an existing component telemetry.', "Oops!");
          this.deleteTelemetryTypeModal.close();
          return;
        }
        // Otherwise, delete the type.
        this.telemetryTypesService.removeTelemetryType(this.selectedTelemetryType)
          .subscribe(_ => {
            this.getTelemetryTypes();
            this.selectedTelemetryType = null;
            this.deleteTelemetryTypeModal.close();
          });
      });
  }

  /**
   * Deletes the current selected {@link System} (and all associated {@link Component}s
   * and {@link ComponentTelemetry}s and resets the selected elements. Closes the modal 
   * window.
   */
  deleteSystem() : void
  {
    if (!this.selectedSystem) return;
    this.systemService.removeSystem(this.selectedSystem)
    .subscribe(sys => {
      this.getSystems();
      this.selectedSystem = null;
      this.selectedComponent = null;
      this.selectedCompTelem = null;
      this.deleteSystemModal.close();
    });
  } 

  /**
   * Deletes the current selected {@link Component} (and all associated {@link ComponentTelemetry}s)
   * and resets the selected elements. Closes the modal window.
   */
  deleteComponent() : void
  {
    if(!this.selectedComponent){
      console.log('no selected comp');
      return;
    }
    this.componentService.removeComponent(this.selectedComponent)
    .subscribe(comp => {
      this.getComponents(this.selectedSystem.systemID);
      this.selectedComponent = null;
      this.selectedCompTelem = null;
      this.deleteComponentModal.close();
    });
  }

  /**
   * Deletes the current selected {@link ComponentTelemetry}
   * and resets the selected elements. Closes the modal window.
   */
  deleteCompTelem() : void
  {
    if (!this.selectedCompTelem) {
      console.log('no selected comp telem');
      return;
    }
    this.compTelemetriesService.removeComponentTelemetry(this.selectedCompTelem)
    .subscribe(compTelem => {
      this.getCompTelemetries(this.selectedComponent.componentID);
      this.selectedCompTelem = null;
      this.deleteCompTelemModal.close();
    });
  }
}
