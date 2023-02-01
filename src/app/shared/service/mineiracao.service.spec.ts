import { TestBed } from '@angular/core/testing';

import { MineiracaoService } from './mineiracao.service';

describe('MineiracaoService', () => {
  let service: MineiracaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MineiracaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
