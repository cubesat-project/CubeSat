import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQueuedTelecommandComponent } from './create-queued-telecommand.component';

describe('CreateQueuedTelecommandComponent', () => {
  let component: CreateQueuedTelecommandComponent;
  let fixture: ComponentFixture<CreateQueuedTelecommandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateQueuedTelecommandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQueuedTelecommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
