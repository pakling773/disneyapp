import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisneyOriginalsComponent } from './disney-originals.component';

describe('DisneyOriginalsComponent', () => {
  let component: DisneyOriginalsComponent;
  let fixture: ComponentFixture<DisneyOriginalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisneyOriginalsComponent]
    });
    fixture = TestBed.createComponent(DisneyOriginalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
