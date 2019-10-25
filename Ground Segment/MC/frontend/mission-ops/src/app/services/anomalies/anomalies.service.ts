import {Injectable, PipeTransform} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import { environment as env } from 'src/environments/environment';

import { Anomaly } from 'src/classes/anomaly';
import { DecimalPipe } from '@angular/common';
import { debounceTime, delay, switchMap, tap, mergeMap } from 'rxjs/operators';
import { SortDirection } from './sortable.directive';

interface SearchResult {
  anomalies: Anomaly[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: string;
  sortDirection: SortDirection;
}

function compare(v1, v2) {
  return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
}

function sort(anomalies: Anomaly[], column: string, direction: string): Anomaly[] {
  if (direction === '') {
    return anomalies;
  } else {
    return [...anomalies].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(anomaly: Anomaly, term: string, pipe: PipeTransform) {
  return anomaly.sysName.toLowerCase().includes(term)
    || anomaly.compName.toLowerCase().includes(term)
    || anomaly.compTelemName.toLowerCase().includes(term)
    || anomaly.collectionTime.toLowerCase().includes(term)
    || pipe.transform(anomaly.reading).includes(term)
    || pipe.transform(anomaly.upperBound).includes(term)
    || pipe.transform(anomaly.lowerBound).includes(term)
    || anomaly.unit.toLowerCase().includes(term);
}

@Injectable({providedIn: 'root'})
export class AnomaliesService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _anomalies$ = new BehaviorSubject<Anomaly[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _state: State = {
    page: 1,
    pageSize: 10,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };

  private systemUrl = `${env.apiRouteBase}/anomalies`;

  constructor(private pipe: DecimalPipe, private http: HttpClient) {
    this._search$.pipe(
      tap(() => this._loading$.next(true)),
      debounceTime(200),
      switchMap(() => this._search()),
      delay(200),
      tap(() => this._loading$.next(false))
    ).subscribe(result => {
      this._anomalies$.next(result.anomalies);
      this._total$.next(result.total);
    });

    this._search$.next();
  }

  get anomalies$() { return this._anomalies$.asObservable(); }
  get total$() { return this._total$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }
  get searchTerm() { return this._state.searchTerm; }

  set page(page: number) { this._set({page}); }
  set pageSize(pageSize: number) { this._set({pageSize}); }
  set searchTerm(searchTerm: string) { this._set({searchTerm}); }
  set sortColumn(sortColumn: string) { this._set({sortColumn}); }
  set sortDirection(sortDirection: SortDirection) { this._set({sortDirection}); }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const {sortColumn, sortDirection, pageSize, page, searchTerm} = this._state;

    return this.http.get<Anomaly[]>(this.systemUrl)
      .pipe(mergeMap(result => {
        // 1. sort
        let anomalies = sort(result, sortColumn, sortDirection);

        // 2. filter
        console.log("searchTerm is: " + searchTerm);
        anomalies = anomalies.filter(anomaly => matches(anomaly, searchTerm, this.pipe));
        const total = anomalies.length;

        // 3. paginate
        anomalies = anomalies.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
        return of({anomalies, total});   
      }));

  }
  
}