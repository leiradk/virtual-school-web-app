import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTabComponent } from './student-tab.component';

describe('StudentTabComponent', () => {
  let component: StudentTabComponent;
  let fixture: ComponentFixture<StudentTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
