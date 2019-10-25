import { TestBed } from '@angular/core/testing';

import { TelemetryTypesService } from './telemetry-types.service';

describe('TelemetryTypesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TelemetryTypesService = TestBed.get(TelemetryTypesService);
    expect(service).toBeTruthy();
  });
});
