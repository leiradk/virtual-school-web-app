import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignQuizzesComponent } from './assign-quizzes.component';

describe('AssignQuizzesComponent', () => {
  let component: AssignQuizzesComponent;
  let fixture: ComponentFixture<AssignQuizzesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignQuizzesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignQuizzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
