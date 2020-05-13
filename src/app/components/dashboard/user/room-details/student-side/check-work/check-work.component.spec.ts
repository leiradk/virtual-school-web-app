import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckWorkComponent } from './check-work.component';

describe('CheckWorkComponent', () => {
  let component: CheckWorkComponent;
  let fixture: ComponentFixture<CheckWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
