import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassGradesComponent } from './class-grades.component';

describe('ClassGradesComponent', () => {
  let component: ClassGradesComponent;
  let fixture: ComponentFixture<ClassGradesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassGradesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
