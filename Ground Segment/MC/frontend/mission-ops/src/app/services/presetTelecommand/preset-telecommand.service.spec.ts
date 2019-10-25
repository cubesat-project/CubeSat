import { TestBed } from '@angular/core/testing';

import { PresetTelecommandService } from './preset-telecommand.service';

describe('PresetTelecommandService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PresetTelecommandService = TestBed.get(PresetTelecommandService);
    expect(service).toBeTruthy();
  });
});
