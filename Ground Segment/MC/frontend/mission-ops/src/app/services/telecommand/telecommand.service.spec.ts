import { TestBed } from '@angular/core/testing';

import { TelecommandService } from './telecommand.service';

describe('TelecommandService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TelecommandService = TestBed.get(TelecommandService);
    expect(service).toBeTruthy();
  });
});
