import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckStudentsComponent } from './check-students.component';

describe('CheckStudentsComponent', () => {
  let component: CheckStudentsComponent;
  let fixture: ComponentFixture<CheckStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
