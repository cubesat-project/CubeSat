import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTelemetryComponent } from './component-telemetry.component';

describe('ComponentTelemetryComponent', () => {
  let component: ComponentTelemetryComponent;
  let fixture: ComponentFixture<ComponentTelemetryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentTelemetryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentTelemetryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
