import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnomalySubscriptionComponent } from './anomaly-subscription.component';

describe('AnomalySubscriptionComponent', () => {
  let component: AnomalySubscriptionComponent;
  let fixture: ComponentFixture<AnomalySubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnomalySubscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnomalySubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
