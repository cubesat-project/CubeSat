import { TestBed } from '@angular/core/testing';

import { AntiAuthGuardService } from './anti-auth-guard.service';

describe('AntiAuthGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AntiAuthGuardService = TestBed.get(AntiAuthGuardService);
    expect(service).toBeTruthy();
  });
});
