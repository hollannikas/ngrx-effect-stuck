import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/retryWhen';
import { NetworkService } from './network-service';

@Injectable()
export class Service {

  constructor(private networkService: NetworkService) {}

  addFeed(action: any): Observable<any> {
    return Observable.of('Stuff from firebase')
      .map(stuff => {
        if (!this.networkService.hasConnection()) {
          throw Error('No connection');
        }
        console.log('We have a connection!');
        return stuff;
      })
      .retryWhen(errors => errors
        .do(() => console.log('Waiting for connection'))
        .delay(3000));
  }
}
