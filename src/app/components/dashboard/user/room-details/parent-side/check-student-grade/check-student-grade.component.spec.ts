import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckStudentGradeComponent } from './check-student-grade.component';

describe('CheckStudentGradeComponent', () => {
  let component: CheckStudentGradeComponent;
  let fixture: ComponentFixture<CheckStudentGradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckStudentGradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckStudentGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
