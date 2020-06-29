import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentSideComponent } from './parent-side.component';

describe('ParentSideComponent', () => {
  let component: ParentSideComponent;
  let fixture: ComponentFixture<ParentSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
