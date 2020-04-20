import { TestBed } from '@angular/core/testing';

import { ApiHostService } from './api-host.service';

describe('ApiHostService', () => {
  let service: ApiHostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiHostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
