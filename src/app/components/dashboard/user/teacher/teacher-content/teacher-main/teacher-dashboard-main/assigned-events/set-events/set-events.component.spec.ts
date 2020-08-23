import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetEventsComponent } from './set-events.component';

describe('SetEventsComponent', () => {
  let component: SetEventsComponent;
  let fixture: ComponentFixture<SetEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
