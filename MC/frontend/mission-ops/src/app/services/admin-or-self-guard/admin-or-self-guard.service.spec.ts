import { TestBed } from '@angular/core/testing';

import { AdminOrSelfGuardService } from './admin-or-self-guard.service';

describe('AdminOrSelfGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminOrSelfGuardService = TestBed.get(AdminOrSelfGuardService);
    expect(service).toBeTruthy();
  });
});
