import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTelemetryTypeComponent } from './create-telemetry-type.component';

describe('CreateTelemetryTypeComponent', () => {
  let component: CreateTelemetryTypeComponent;
  let fixture: ComponentFixture<CreateTelemetryTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTelemetryTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTelemetryTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
