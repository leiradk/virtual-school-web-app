import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingLibraryComponent } from './loading-library.component';

describe('LoadingLibraryComponent', () => {
  let component: LoadingLibraryComponent;
  let fixture: ComponentFixture<LoadingLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
