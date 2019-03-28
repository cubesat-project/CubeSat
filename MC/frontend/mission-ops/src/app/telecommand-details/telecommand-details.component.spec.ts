import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelecommandDetailsComponent } from './telecommand-details.component';

describe('TelecommandDetailsComponent', () => {
  let component: TelecommandDetailsComponent;
  let fixture: ComponentFixture<TelecommandDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelecommandDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelecommandDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
