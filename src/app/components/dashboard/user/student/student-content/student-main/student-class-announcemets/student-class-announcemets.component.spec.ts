import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentClassAnnouncemetsComponent } from './student-class-announcemets.component';

describe('StudentClassAnnouncemetsComponent', () => {
  let component: StudentClassAnnouncemetsComponent;
  let fixture: ComponentFixture<StudentClassAnnouncemetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentClassAnnouncemetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentClassAnnouncemetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
