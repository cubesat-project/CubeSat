import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelecommandBatchDetailsComponent } from './telecommand-batch-details.component';

describe('TelecommandBatchDetailsComponent', () => {
  let component: TelecommandBatchDetailsComponent;
  let fixture: ComponentFixture<TelecommandBatchDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelecommandBatchDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelecommandBatchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
