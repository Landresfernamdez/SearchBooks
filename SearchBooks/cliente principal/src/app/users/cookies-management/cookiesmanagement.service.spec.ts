import { TestBed, inject } from '@angular/core/testing';

import { CookiesmanagementService } from './cookiesmanagement.service';

describe('CookiesmanagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CookiesmanagementService]
    });
  });
  it('should be created', inject([CookiesmanagementService], (service: CookiesmanagementService) => {
    expect(service).toBeTruthy();
  }));
});
