import { TestBed, inject } from '@angular/core/testing';

import { CustomerCodeService } from './customer-code.service';

describe('CustomerCodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerCodeService]
    });
  });

  it('should be created', inject([CustomerCodeService], (service: CustomerCodeService) => {
    expect(service).toBeTruthy();
  }));
});
