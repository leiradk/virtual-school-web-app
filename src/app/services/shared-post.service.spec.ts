import { TestBed } from '@angular/core/testing';

import { SharedPostService } from './shared-post.service';

describe('SharedPostService', () => {
  let service: SharedPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
