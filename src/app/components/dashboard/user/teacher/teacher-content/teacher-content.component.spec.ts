import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherContentComponent } from './teacher-content.component';

describe('TeacherContentComponent', () => {
  let component: TeacherContentComponent;
  let fixture: ComponentFixture<TeacherContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
