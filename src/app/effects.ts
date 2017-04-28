import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

import { Service } from './service';

@Injectable()
export class MyEffects {
  @Effect() add$: Observable<any> = this.actions$
    .ofType('ADD')
    .switchMap((action) => this.service.addFeed(action)
      .map(result => {
        console.log(`Result: ${result}`);
        if (result === 'WAIT_NEEDED') {
          return { type: 'WAITING_NETWORK', payload: action };
        } else {
          return { type: 'SUCCESS' };
        }
      })
      .catch(() => Observable.of({ type: 'ACTION_ERROR' }))
    );


  @Effect() wait$: Observable<any> = this.actions$
    .ofType('WAITING_NETWORK')
    .switchMap((action) => this.service.waitForXSec(4)
      .map(() => ({ type: action.payload.type, payload: action.payload.payload }))
      .catch((error) =>
        Observable.of({ type: 'ACTION_ERROR' })
      )
    );

  constructor(
    private actions$: Actions,
    private service: Service
  ) {}


}
