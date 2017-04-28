import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/range';
import 'rxjs/add/operator/delay';
import { NetworkService } from './network-service';

@Injectable()
export class Service {

  constructor(private networkService: NetworkService) {}

  addFeed(action: any): Observable<any> {
    if (this.networkService.hasConnection()) {
      return Observable.of('Some stuff from firebase')
        .do(() => console.log('doing whatever addFeed does'));
    } else {
      return Observable.of('Some stuff from firebase')
        .delay(3000) // ms
        .do(() => console.log('doing whatever addFeed does, but 3 seconds later'));
    }
  }
}
