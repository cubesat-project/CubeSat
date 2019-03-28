import { Observable } from 'rxjs';

export interface IObservable<T> {
    getObservable(): Observable<T>
}
