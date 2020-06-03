import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherStaffTabComponent } from './teacher-staff-tab.component';

describe('TeacherStaffTabComponent', () => {
  let component: TeacherStaffTabComponent;
  let fixture: ComponentFixture<TeacherStaffTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherStaffTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherStaffTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
