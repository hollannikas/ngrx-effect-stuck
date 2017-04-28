import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class Service {
  constructor() {}

  addFeed(action: any): Observable<any> {
    return Observable.of('WAIT_NEEDED');
  }

  waitForXSec(number: number): Observable<any> {
    return Observable.of('');
  }
}
