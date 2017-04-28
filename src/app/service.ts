import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';

@Injectable()
export class Service {
  private counter: number;
  constructor() {
    this.counter = 0;
  }

  addFeed(action: any): Observable<any> {
    this.counter++;

    if (this.counter > 3){
      console.log('Loop counter: ' + this.counter);
      console.log('It should stop after 3 iterations and terminate with the reducer to ADD + SUCCESS' );
      return Observable.of('LOOP_SHOULD_BE_OVER');
    } else
      return Observable.of('WAIT_NEEDED');
  }

  waitForXSec(number: number): Observable<any> {
    return Observable.interval(number *1000); // let's wait x seconds before changing the state
  }
}
