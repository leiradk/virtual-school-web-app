import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAssignedEventsComponent } from './student-assigned-events.component';

describe('StudentAssignedEventsComponent', () => {
  let component: StudentAssignedEventsComponent;
  let fixture: ComponentFixture<StudentAssignedEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentAssignedEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAssignedEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
