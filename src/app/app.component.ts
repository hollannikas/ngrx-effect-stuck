import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  stuffFromFirebase: Observable<any[]>;

  constructor(private store: Store<any>) {
    this.stuffFromFirebase = this.store.select('state')
      .map(state => state);
  }

  add() {
    this.store.dispatch({type: 'ADD', payload: ''});
  }
}
