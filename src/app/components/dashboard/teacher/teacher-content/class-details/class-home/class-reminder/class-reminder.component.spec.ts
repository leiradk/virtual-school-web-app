import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassReminderComponent } from './class-reminder.component';

describe('ClassReminderComponent', () => {
  let component: ClassReminderComponent;
  let fixture: ComponentFixture<ClassReminderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassReminderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
