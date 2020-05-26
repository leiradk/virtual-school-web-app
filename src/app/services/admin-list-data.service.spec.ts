import { TestBed } from '@angular/core/testing';

import { AdminListDataService } from './admin-list-data.service';

describe('AdminListDataService', () => {
  let service: AdminListDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminListDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
