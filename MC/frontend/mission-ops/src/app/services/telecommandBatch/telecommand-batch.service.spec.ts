import { TestBed } from '@angular/core/testing';

import { TelecommandBatchService } from './telecommand-batch.service';

describe('TelecommandBatchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TelecommandBatchService = TestBed.get(TelecommandBatchService);
    expect(service).toBeTruthy();
  });
});
