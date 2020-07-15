import { Component, OnInit, Input } from '@angular/core';

/**
 * A component representing a standard dismissable bootstrap alert with a heading and body.
 * To include in html, use `<app-alert [alertStyle]="'danger'"></app-alert>`, where danger 
 * can be replaced with any valid bootstrap style (primary, secondary, success, etc). To 
 * show and hide, add `@ViewChild(AlertComponent) alertVarName: AlertComponent` to the 
 * parent component to obtain a reference to the alert component, then just call the 
 * component's show and hide methods using that reference.
 *
 * @export
 * @class AlertComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  private alertClasses = 'alert alert-primary';

  @Input()
  set alertStyle(alertStyle: string) {
    if (alertStyle) {
      this.alertClasses = `alert alert-${alertStyle}`;
    }
  }

  public showAlert: boolean = false;
  private heading: string;

  private listBody: boolean;
  private body: string;
  private bodyList: Array<string>;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Shows the alert and sets its properties to the provided values.
   * If the passed body is an array containing two or more strings, it is
   * displayed as a list. Otherwise, it is displayed as a paragraph.
   *
   * @param {string} heading The heading for the alert to display.
   * @param {string | Array<string>} body The body of the alert.
   * @param {string} [alertStyle] The style to set the alert to. Can be any valid bootstrap style (primary, secondary, success, etc).
   * @memberof AlertComponent
   */
  public show(heading: string, body: string | Array<string>, alertStyle?: string): void {
    this.heading = heading;
    if (alertStyle) {
      this.alertStyle = alertStyle;
    }

    if (Array.isArray(body)) {
      if (body.length > 1 ) {
        // More than one message, so display as a list
        this.listBody = true;
        this.bodyList = body;
      } else {
        // One or zero items, so display as simple alert
        this.listBody = false;
        this.body = body[0] || '';  // Assign body[0] to this.body if it exists, otherwise use empty string
      }
    } else if (typeof(body) === 'string') {
      this.listBody = false;
      this.body = body;
    } else {
      console.log('Body passed to alert.show() is not a string or string[]');
      this.body = '';
    }

    this.showAlert = true;
  }
  
  /**
   * Hides the alert.
   *
   * @memberof AlertComponent
   */
  public hide(): void {
    this.showAlert = false;
  }
}
