import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateClassworkComponent } from './update-classwork.component';

describe('UpdateClassworkComponent', () => {
  let component: UpdateClassworkComponent;
  let fixture: ComponentFixture<UpdateClassworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateClassworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateClassworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
