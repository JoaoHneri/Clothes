import { TestBed } from '@angular/core/testing';

import { ProdPaymentsService } from './prod-payments.service';

describe('ProdPaymentsService', () => {
  let service: ProdPaymentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdPaymentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
