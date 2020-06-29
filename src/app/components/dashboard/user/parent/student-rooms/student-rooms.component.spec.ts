import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRoomsComponent } from './student-rooms.component';

describe('StudentRoomsComponent', () => {
  let component: StudentRoomsComponent;
  let fixture: ComponentFixture<StudentRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentRoomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
