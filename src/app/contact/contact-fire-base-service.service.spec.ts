import { TestBed } from '@angular/core/testing';

import { ContactFireBaseServiceService } from './contact-fire-base-service.service';

describe('ContactFireBaseServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactFireBaseServiceService = TestBed.get(ContactFireBaseServiceService);
    expect(service).toBeTruthy();
  });
});
