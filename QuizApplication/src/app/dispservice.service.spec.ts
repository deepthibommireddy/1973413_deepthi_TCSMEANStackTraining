import { TestBed } from '@angular/core/testing';

import { DispserviceService } from './dispservice.service';

describe('DispserviceService', () => {
  let service: DispserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DispserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
