import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  data: any = {};
  private tokenSubject = new BehaviorSubject<any>('');
    token$ = this.tokenSubject.asObservable();

    get(): any {
        return this.tokenSubject.value;
    }

    set(token: any): void {
        this.tokenSubject.next(token);
    }
    clear(): any {
      this.tokenSubject.closed;
  }
  constructor() { }
}
