import { TestBed } from '@angular/core/testing';

import { ComponentTelemetryDataService } from './component-telemetry-data.service';

describe('ComponentTelemetryDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComponentTelemetryDataService = TestBed.get(ComponentTelemetryDataService);
    expect(service).toBeTruthy();
  });
});
