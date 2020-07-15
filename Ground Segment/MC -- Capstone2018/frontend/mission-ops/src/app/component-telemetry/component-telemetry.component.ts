import { Component, OnInit, Input } from '@angular/core';
import { ComponentTelemetryService } from 'src/app/services/component-telemetry/component-telemetry.service';
import { ComponentTelemetry } from 'src/classes/component-telemetry';
import { Component as CubeSatComp } from 'src/classes/component';
import { TelemetryTypesService } from 'src/app/services/telemetry-types/telemetry-types.service';
import { TelemetryType } from 'src/classes/telemetry-type';
 
@Component({
  selector: 'app-component-telemetry',
  templateUrl: './component-telemetry.component.html',
  styleUrls: ['./component-telemetry.component.scss']
})
export class ComponentTelemetryComponent implements OnInit {
  
  private _component: CubeSatComp;
  @Input() dateRangeObj: any;
  @Input() telemetryTypes : TelemetryType[];

  @Input() 
  public get component() {
    return this._component;
  }
  public set component(val: CubeSatComp) {
    this._component = val;
    this.getComponentTelemetries(this._component.componentID);
  }

  componentTelemetries: ComponentTelemetry[];

  constructor(private componentTelemetryService: ComponentTelemetryService) { }

  ngOnInit() {
    console.log('init comp telemetry');
    this._component = this._component;
    this.getComponentTelemetries(this.component.componentID);
  }

  getComponentTelemetries(componentID: number): void {
    console.log('get comp telemetries from ' + componentID);
    this.componentTelemetryService.getComponentTelemetries(componentID)
      .subscribe(componentTelemetries => {
        this.componentTelemetries = componentTelemetries;
      });
  }

}
