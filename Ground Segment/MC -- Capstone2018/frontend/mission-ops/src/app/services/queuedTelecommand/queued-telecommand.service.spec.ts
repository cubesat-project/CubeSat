import { TestBed } from '@angular/core/testing';

import { QueuedTelecommandService } from './queued-telecommand.service';

describe('QueuedTelecommandService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QueuedTelecommandService = TestBed.get(QueuedTelecommandService);
    expect(service).toBeTruthy();
  });
});
