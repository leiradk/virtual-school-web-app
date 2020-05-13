import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignLessonsComponent } from './assign-lessons.component';

describe('AssignLessonsComponent', () => {
  let component: AssignLessonsComponent;
  let fixture: ComponentFixture<AssignLessonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignLessonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
