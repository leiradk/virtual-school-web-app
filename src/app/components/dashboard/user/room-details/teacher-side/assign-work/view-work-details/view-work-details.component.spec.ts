import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWorkDetailsComponent } from './view-work-details.component';

describe('ViewWorkDetailsComponent', () => {
  let component: ViewWorkDetailsComponent;
  let fixture: ComponentFixture<ViewWorkDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewWorkDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWorkDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
