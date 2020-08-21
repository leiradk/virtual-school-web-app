import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAssignedClassesComponent } from './my-assigned-classes.component';

describe('MyAssignedClassesComponent', () => {
  let component: MyAssignedClassesComponent;
  let fixture: ComponentFixture<MyAssignedClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAssignedClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAssignedClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
