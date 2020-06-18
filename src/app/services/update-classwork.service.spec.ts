import { TestBed } from '@angular/core/testing';

import { UpdateClassworkService } from './update-classwork.service';

describe('UpdateClassworkService', () => {
  let service: UpdateClassworkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateClassworkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
