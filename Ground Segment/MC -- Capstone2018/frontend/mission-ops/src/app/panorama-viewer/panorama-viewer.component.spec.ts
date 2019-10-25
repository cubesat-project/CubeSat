import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoramaViewerComponent } from './panorama-viewer.component';

describe('PanoramaViewerComponent', () => {
  let component: PanoramaViewerComponent;
  let fixture: ComponentFixture<PanoramaViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanoramaViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanoramaViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
