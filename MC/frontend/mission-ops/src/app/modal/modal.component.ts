import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { IObservable } from 'src/interfaces/iObservable';

/**
 * A component representing a standard bootstrap modal window with a title, body, and footer.
 * To use this component, insert the following html code into your template:
 *
 * <app-modal [dataSource]="mycomponent">
 *  <ng-container modal-title>
 *    <!-- any html you want to appear in the title bar -->
 *  </ng-container modal-title>
 *  <ng-container modal-body>
 *    <!-- any html you want to appear in the body -->
 *  </ng-container modal-body>
 *  <ng-container modal-footer>
 *    <!-- any html you want to appear in the footer -->
 *  </ng-container modal-footer>
 * </app-modal>
 *
 * Where the comments in the html snippet can be replaced with whatever you want. If you want
 * to use a component in the body and reference it in the footer (e.g. having a form in the 
 * body and a submit button in the footer) you can add a template reference (e.g. #mycomponent)
 * to the tag for your component and then use that as a reference to your component object
 * (e.g. <button (click)="mycomponent.doSomething()"">Click Me</button> in the footer)
 * 
 * @export
 * @class ModalComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @ViewChild('modalContent')
  private modalContent: ElementRef;

  private modalRef: NgbModalRef;

  @Input()
  private dataSource: IObservable<any>;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  /**
   * Opens the modal window and returns a promise that will eventually
   * complete with the result of the modal. The promise will resolve if
   * the modal was closed (i.e. operations completed successfully) and
   * will reject if the modal was dismissed (i.e. the user closed it
   * manually or the operation failed).
   *
   * @returns {Promise<any>} A promise containing the result of the operation performed by the modal.
   * @memberof ModalComponent
   */
  public open(): Promise<any> {
    this.modalRef = this.modalService.open(this.modalContent);
    
    if (this.dataSource) {
      this.dataSource.getObservable().subscribe((result) => {
        this.close(result);
      },
      (err) => {
        this.dismiss(err);
      });
    }

    return this.modalRef.result;
  }

  /**
   * Closes the modal and causes the modal promise to reject with
   * the given reason.
   *
   * @param {*} [reason] The reason the modal was dismissed.
   * @memberof ModalComponent
   */
  public dismiss(reason?: any) {
    if (this.modalRef) {
      this.modalRef.dismiss(reason);
    }
  }

  /**
   * Closes the modal and causes the modal promise to resolve
   * with the given result.
   *
   * @param {*} [result] The result returned by the modal promise.
   * @memberof ModalComponent
   */
  public close(result?: any) {
    if (this.modalRef) {
      this.modalRef.close(result);
    }
  }
}
