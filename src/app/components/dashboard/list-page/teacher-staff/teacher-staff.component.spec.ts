import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherStaffComponent } from './teacher-staff.component';

describe('TeacherStaffComponent', () => {
  let component: TeacherStaffComponent;
  let fixture: ComponentFixture<TeacherStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
