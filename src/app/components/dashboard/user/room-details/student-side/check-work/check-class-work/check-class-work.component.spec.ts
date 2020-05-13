import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckClassWorkComponent } from './check-class-work.component';

describe('CheckClassWorkComponent', () => {
  let component: CheckClassWorkComponent;
  let fixture: ComponentFixture<CheckClassWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckClassWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckClassWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
