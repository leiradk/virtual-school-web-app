import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherDashboardMainComponent } from './teacher-dashboard-main.component';

describe('TeacherDashboardMainComponent', () => {
  let component: TeacherDashboardMainComponent;
  let fixture: ComponentFixture<TeacherDashboardMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherDashboardMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherDashboardMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
