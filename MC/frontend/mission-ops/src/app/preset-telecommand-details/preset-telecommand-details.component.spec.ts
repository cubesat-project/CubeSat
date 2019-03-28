import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresetTelecommandDetailsComponent } from './preset-telecommand-details.component';

describe('PresetTelecommandDetailsComponent', () => {
  let component: PresetTelecommandDetailsComponent;
  let fixture: ComponentFixture<PresetTelecommandDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresetTelecommandDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresetTelecommandDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
