import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedEventsComponent } from './assigned-events.component';

describe('AssignedEventsComponent', () => {
  let component: AssignedEventsComponent;
  let fixture: ComponentFixture<AssignedEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignedEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
