import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckStudentClassworkComponent } from './check-student-classwork.component';

describe('CheckStudentClassworkComponent', () => {
  let component: CheckStudentClassworkComponent;
  let fixture: ComponentFixture<CheckStudentClassworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckStudentClassworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckStudentClassworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
