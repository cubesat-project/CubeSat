import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface PageChangeEvent {
  page: number,
  prevPage: number
}

/**
 * A component for a pagnination menu that displays several page numbers along
 * with previous and next page buttons. The component emits a pageChange event
 * to alert the parent component when the page is changed.
 *
 * @export
 * @class PaginationComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  private _page: number;
  /**
   * The current page number.
   *
   * @private
   * @type {number}
   * @memberof PaginationComponent
   */
  @Input()
  public get page() {
    return this._page;
  }
  public set page(val: number) {
    this._page = val;
    this.updateDisplayPages();
  }

  private _maxPage: number = 1;
  /**
   * The maximum page number.
   *
   * @private
   * @type {number}
   * @memberof PaginationComponent
   */
  @Input()
  public get maxPage() {
    return this._maxPage;
  }
  public set maxPage(val: number) {
    this._maxPage = val;
    this.page = this.minPage;
    this.updateDisplayPages();
  }

  private _pagesDisplayed: number;
  /**
   * The number of pages to be displayed at any one time. The value will be made positive if negative,
   * and will default to 3 if not provided or zero. If there are less pages to display than this value,
   * all pages will be displayed as options.
   *
   * @private
   * @type {number}
   * @memberof PaginationComponent
   */
  @Input()
  private get pagesDisplayed() {
    return this._pagesDisplayed;
  };
  private set pagesDisplayed(val: number) {
    this._pagesDisplayed = val;
    this.updateDisplayPages();
  }

  /**
   * Emits an event each time the page is changed. The event will contain the new page number
   * as well as the previous page number. The event will fire even if the page is "changed"
   * to exactly the same page, however the new and previous page numbers will be the same.
   *
   * @private
   * @memberof PaginationComponent
   */
  @Output()
  private pageChange = new EventEmitter<PageChangeEvent>();

  private _minPage: number = 1;
  /**
   * The minimum page number. Default of 1.
   *
   * @private
   * @type {number}
   * @memberof PaginationComponent
   */
  public get minPage() {
    return this._minPage;
  };
  public set minPage(val: number) {
    this._minPage = val;
    this.updateDisplayPages();
  }

  /**
   * An array of the pages that are currently displayed on the component.
   *
   * @private
   * @type {Array<number>}
   * @memberof PaginationComponent
   */
  public displayPages: Array<number>;

  constructor() { }

  ngOnInit() {
    this.maxPage = this.maxPage ? Math.max(this.maxPage, 1) : 1;                                        // Ensure max page exists and is >= 1
    this.page = this.page ? Math.min(this.maxPage, Math.max(this.page, this.minPage)) : this.minPage;   // Ensure page exists and is valid, defaulting to first page if it doesn't exist
    this.pagesDisplayed = this.pagesDisplayed ? Math.abs(this.pagesDisplayed) : 3;                      // Ensure pagesDisplayed exists and is positive
  }

  /**
   * Updates the displayPages array to contain the page number of all
   * pages that should be displayed currently.
   *
   * @private
   * @memberof PaginationComponent
   */
  private updateDisplayPages(): void {
    const pagesToDisplay = Math.min(this.pagesDisplayed, this.maxPage - this.minPage + 1);  // Number of pages to attempt to display, trimmed to be within the total number of pages
    let prevPagesDisplayed = Math.floor((pagesToDisplay - 1) / 2);                          // Number of previous pages to display
    const prevPages = this.page - this.minPage;                                             // Maximum number of previous pages that can be displayed
    let nextPagesDisplayed = Math.ceil((pagesToDisplay - 1) / 2);                           // Number of next pages to display
    const nextPages = this.maxPage - this.page;                                             // Maximum number of next pages that can be displayed

    if (prevPages < prevPagesDisplayed) {
      // Not enough previous pages to show, so transfer that space to display next pages
      nextPagesDisplayed += prevPagesDisplayed - prevPages;
      prevPagesDisplayed = prevPages;
    } else if (nextPages < nextPagesDisplayed) {
      // Not enough next pages to show, so transfer that space to display previous pages
      prevPagesDisplayed += nextPagesDisplayed - nextPages;
      nextPagesDisplayed = nextPages;
    }

    let tempDisplayPages = [];
    for (let i = this.page - prevPagesDisplayed; i < this.page + nextPagesDisplayed + 1; i++) {
      tempDisplayPages.push(i);
    }

    this.displayPages = tempDisplayPages;
  }

  /**
   * Switches to the given page. If the given page number is outside the range of valid page numbers, it is clamped to the
   * minimum or maximum page number, whichever the given number is closest to. Each time this method is called a pageChange
   * event is emitted, *even if the page did not change*.
   *
   * @param {number} pageNumber The number of the page to go to.
   * @memberof PaginationComponent
   */
  public goToPage(pageNumber: number): void {
    pageNumber = Math.min(this.maxPage, Math.max(pageNumber, this.minPage));  // Clamp pageNumber to range of valid values

    const prevPage = this.page;
    this.page = pageNumber;
    this.updateDisplayPages();

    this.pageChange.emit({
      page: this.page,
      prevPage: prevPage
    });
  }

  /**
   * Switches to the next page.
   *
   * @memberof PaginationComponent
   */
  public nextPage(): void {
    this.goToPage(this.page + 1);
  }

  /**
   * Switches to the last page.
   *
   * @memberof PaginationComponent
   */
  public lastPage(): void {
    this.goToPage(this.maxPage);
  }

  /**
   * Switches to the previous page.
   *
   * @memberof PaginationComponent
   */
  public prevPage(): void {
    this.goToPage(this.page - 1);
  }

  /**
   * Switches to the first page.
   *
   * @memberof PaginationComponent
   */
  public firstPage(): void {
    this.goToPage(this.minPage);
  }
}
