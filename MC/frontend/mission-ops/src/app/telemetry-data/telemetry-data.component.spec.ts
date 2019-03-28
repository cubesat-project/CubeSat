import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelemetryDataComponent } from './telemetry-data.component';

describe('TelemetryDataComponent', () => {
  let component: TelemetryDataComponent;
  let fixture: ComponentFixture<TelemetryDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelemetryDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelemetryDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
