import { TestBed } from '@angular/core/testing';

import { PanoramicMediaService } from './panoramic-media.service';

describe('PanoramicMediaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PanoramicMediaService = TestBed.get(PanoramicMediaService);
    expect(service).toBeTruthy();
  });
});
