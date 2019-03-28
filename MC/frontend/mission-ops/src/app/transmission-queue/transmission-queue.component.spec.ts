import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransmissionQueueComponent } from './transmission-queue.component';

describe('TransmissionQueueComponent', () => {
  let component: TransmissionQueueComponent;
  let fixture: ComponentFixture<TransmissionQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransmissionQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransmissionQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
