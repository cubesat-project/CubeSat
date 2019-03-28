import { TestBed } from '@angular/core/testing';

import { SubscriptionsService } from './subscriptions.service';

describe('SubscriptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubscriptionsService = TestBed.get(SubscriptionsService);
    expect(service).toBeTruthy();
  });
});
