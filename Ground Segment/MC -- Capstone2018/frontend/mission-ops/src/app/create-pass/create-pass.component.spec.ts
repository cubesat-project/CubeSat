import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePassComponent } from './create-pass.component';

describe('CreatePassComponent', () => {
  let component: CreatePassComponent;
  let fixture: ComponentFixture<CreatePassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
