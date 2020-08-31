import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherViewModulesComponent } from './teacher-view-modules.component';

describe('TeacherViewModulesComponent', () => {
  let component: TeacherViewModulesComponent;
  let fixture: ComponentFixture<TeacherViewModulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherViewModulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherViewModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
