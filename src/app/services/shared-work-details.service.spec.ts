import { TestBed } from '@angular/core/testing';

import { SharedWorkDetailsService } from './shared-work-details.service';

describe('SharedWorkDetailsService', () => {
  let service: SharedWorkDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedWorkDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
