import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentGuardianTabComponent } from './parent-guardian-tab.component';

describe('ParentGuardianTabComponent', () => {
  let component: ParentGuardianTabComponent;
  let fixture: ComponentFixture<ParentGuardianTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentGuardianTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentGuardianTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
