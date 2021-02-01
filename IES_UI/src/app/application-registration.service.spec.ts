import { TestBed } from '@angular/core/testing';

import { ApplicationRegistrationService } from './application-registration.service';

describe('ApplicationRegistrationService', () => {
  let service: ApplicationRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
