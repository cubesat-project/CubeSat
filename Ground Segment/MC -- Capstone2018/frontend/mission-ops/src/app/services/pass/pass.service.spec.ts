import { TestBed } from '@angular/core/testing';

import { PassService } from './pass.service';

describe('PassService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PassService = TestBed.get(PassService);
    expect(service).toBeTruthy();
  });
});
