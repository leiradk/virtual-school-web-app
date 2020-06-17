import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClassworkComponent } from './add-classwork.component';

describe('AddClassworkComponent', () => {
  let component: AddClassworkComponent;
  let fixture: ComponentFixture<AddClassworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClassworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClassworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
