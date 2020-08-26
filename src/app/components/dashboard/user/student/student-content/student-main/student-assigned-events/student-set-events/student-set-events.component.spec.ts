import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSetEventsComponent } from './student-set-events.component';

describe('StudentSetEventsComponent', () => {
  let component: StudentSetEventsComponent;
  let fixture: ComponentFixture<StudentSetEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentSetEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSetEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
