import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckUsersComponent } from './check-users.component';

describe('CheckUsersComponent', () => {
  let component: CheckUsersComponent;
  let fixture: ComponentFixture<CheckUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
