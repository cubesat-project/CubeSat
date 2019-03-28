import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaLibraryComponent } from './media-library.component';

describe('MediaLibraryComponent', () => {
  let component: MediaLibraryComponent;
  let fixture: ComponentFixture<MediaLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
