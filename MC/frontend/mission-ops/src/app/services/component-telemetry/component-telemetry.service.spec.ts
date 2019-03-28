import { TestBed } from '@angular/core/testing';

import { ComponentTelemetryService } from './component-telemetry.service';

describe('ComponentTelemetryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComponentTelemetryService = TestBed.get(ComponentTelemetryService);
    expect(service).toBeTruthy();
  });
});
