import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CubesatSysInputsComponent } from './cubesat-sys-inputs.component';

describe('CubesatSysInputsComponent', () => {
  let component: CubesatSysInputsComponent;
  let fixture: ComponentFixture<CubesatSysInputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CubesatSysInputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CubesatSysInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
