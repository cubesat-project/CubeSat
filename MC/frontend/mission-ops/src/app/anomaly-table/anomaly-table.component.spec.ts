import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnomalyTableComponent } from './anomaly-table.component';

describe('AnomalyTableComponent', () => {
  let component: AnomalyTableComponent;
  let fixture: ComponentFixture<AnomalyTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnomalyTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnomalyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
