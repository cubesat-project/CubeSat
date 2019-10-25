import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueuedTelecommandComponent } from './queued-telecommand.component';

describe('QueuedTelecommandComponent', () => {
  let component: QueuedTelecommandComponent;
  let fixture: ComponentFixture<QueuedTelecommandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueuedTelecommandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueuedTelecommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
