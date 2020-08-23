import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingMaterialsComponent } from './teaching-materials.component';

describe('TeachingMaterialsComponent', () => {
  let component: TeachingMaterialsComponent;
  let fixture: ComponentFixture<TeachingMaterialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachingMaterialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
