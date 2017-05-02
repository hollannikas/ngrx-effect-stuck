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
      .map(result => ({ type: 'ADDED', payload: result }))
      .catch(() => Observable.of({ type: 'ACTION_ERROR' }))
    );

  constructor(
    private actions$: Actions,
    private service: Service
  ) {}


}
