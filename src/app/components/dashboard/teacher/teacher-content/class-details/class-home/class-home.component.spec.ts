import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassHomeComponent } from './class-home.component';

describe('ClassHomeComponent', () => {
  let component: ClassHomeComponent;
  let fixture: ComponentFixture<ClassHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
