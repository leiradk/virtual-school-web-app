import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassAnnouncementsComponent } from './class-announcements.component';

describe('ClassAnnouncementsComponent', () => {
  let component: ClassAnnouncementsComponent;
  let fixture: ComponentFixture<ClassAnnouncementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassAnnouncementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassAnnouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
