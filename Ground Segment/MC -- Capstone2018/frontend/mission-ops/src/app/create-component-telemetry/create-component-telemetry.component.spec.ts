import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComponentTelemetryComponent } from './create-component-telemetry.component';

describe('CreateComponentTelemetryComponent', () => {
  let component: CreateComponentTelemetryComponent;
  let fixture: ComponentFixture<CreateComponentTelemetryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateComponentTelemetryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComponentTelemetryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
