import { TestBed } from '@angular/core/testing';

import { AnomaliesService } from './anomalies.service';

describe('AnomaliesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnomaliesService = TestBed.get(AnomaliesService);
    expect(service).toBeTruthy();
  });
});
