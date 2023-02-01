import { TestBed } from '@angular/core/testing';

import { PilacoinService } from './pilacoin.service';

describe('PilacoinService', () => {
  let service: PilacoinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PilacoinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
