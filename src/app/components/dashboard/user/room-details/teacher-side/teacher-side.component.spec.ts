import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherSideComponent } from './teacher-side.component';

describe('TeacherSideComponent', () => {
  let component: TeacherSideComponent;
  let fixture: ComponentFixture<TeacherSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
