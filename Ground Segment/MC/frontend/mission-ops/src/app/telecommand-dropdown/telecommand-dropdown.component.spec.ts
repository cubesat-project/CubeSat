import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelecommandDropdownComponent } from './telecommand-dropdown.component';

describe('TelecommandDropdownComponent', () => {
  let component: TelecommandDropdownComponent;
  let fixture: ComponentFixture<TelecommandDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelecommandDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelecommandDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
