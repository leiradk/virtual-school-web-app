import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentContentComponent } from './student-content.component';

describe('StudentContentComponent', () => {
  let component: StudentContentComponent;
  let fixture: ComponentFixture<StudentContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
