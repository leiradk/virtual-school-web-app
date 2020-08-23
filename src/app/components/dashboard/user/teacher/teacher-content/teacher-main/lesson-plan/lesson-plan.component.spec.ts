import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonPlanComponent } from './lesson-plan.component';

describe('LessonPlanComponent', () => {
  let component: LessonPlanComponent;
  let fixture: ComponentFixture<LessonPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
