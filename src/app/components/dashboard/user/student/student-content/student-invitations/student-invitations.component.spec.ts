import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentInvitationsComponent } from './student-invitations.component';

describe('StudentInvitationsComponent', () => {
  let component: StudentInvitationsComponent;
  let fixture: ComponentFixture<StudentInvitationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentInvitationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentInvitationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
