import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutionQueueComponent } from './execution-queue.component';

describe('ExecutionQueueComponent', () => {
  let component: ExecutionQueueComponent;
  let fixture: ComponentFixture<ExecutionQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutionQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutionQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
