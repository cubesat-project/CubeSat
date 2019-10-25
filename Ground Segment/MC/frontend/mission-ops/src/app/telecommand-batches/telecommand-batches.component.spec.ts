import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelecommandBatchesComponent } from './telecommand-batches.component';

describe('TelecommandBatchesComponent', () => {
  let component: TelecommandBatchesComponent;
  let fixture: ComponentFixture<TelecommandBatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelecommandBatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelecommandBatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
