import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckRemindersComponent } from './check-reminders.component';

describe('CheckRemindersComponent', () => {
  let component: CheckRemindersComponent;
  let fixture: ComponentFixture<CheckRemindersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckRemindersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckRemindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
