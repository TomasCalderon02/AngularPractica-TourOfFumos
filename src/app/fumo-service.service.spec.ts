import { TestBed } from '@angular/core/testing';

import { FumoServiceService } from './fumo-service.service';

describe('FumoServiceService', () => {
  let service: FumoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FumoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
