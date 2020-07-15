import { Component, Input } from '@angular/core';
import { DateTimeAdapter, OWL_DATE_TIME_LOCALE, OWL_DATE_TIME_FORMATS } from 'ng-pick-datetime';
import { MomentDateTimeAdapter/*, OWL_MOMENT_DATE_TIME_FORMATS */} from '@danielmoncada/angular-datetime-picker';

export const MY_MOMENT_FORMATS = {
    parseInput: 'l LT',
    fullPickerInput: 'YYYY/MM/DD HH:mm:ss',
    datePickerInput: 'l',
    timePickerInput: 'LT',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
};

/**
 * Datetime picker form component.
 */
@Component({
  selector: 'app-datetime-picker',
  templateUrl: './datetime-picker.component.html',
  styleUrls: ['./datetime-picker.component.scss'],
  providers: [
    {provide: DateTimeAdapter, useClass: MomentDateTimeAdapter, deps: [OWL_DATE_TIME_LOCALE]},
    {provide: OWL_DATE_TIME_FORMATS, useValue: MY_MOMENT_FORMATS},
  ]
})
export class DatetimePickerComponent {

  /**
   * The date (yyyy-mm-dd) selected.
   */
  @Input()
  dateFormControlName;

  /**
   * The parent form group title.
   */
  @Input()
  formGroup;
}
