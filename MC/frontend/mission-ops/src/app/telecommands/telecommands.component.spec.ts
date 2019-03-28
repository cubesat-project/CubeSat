import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelecommandsComponent } from './telecommands.component';

describe('TelecommandsComponent', () => {
  let component: TelecommandsComponent;
  let fixture: ComponentFixture<TelecommandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelecommandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelecommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
