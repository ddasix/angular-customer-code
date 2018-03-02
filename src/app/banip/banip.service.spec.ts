import { TestBed, inject } from '@angular/core/testing';

import { BanipService } from './banip.service';

describe('BanipService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BanipService]
    });
  });

  it('should be created', inject([BanipService], (service: BanipService) => {
    expect(service).toBeTruthy();
  }));
});
