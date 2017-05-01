import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { NetworkService } from './network-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  stuffFromFirebase: Observable<any[]>;

  connection;

  constructor(
    private store: Store<any>,
    private networkService: NetworkService
  ) {
    this.stuffFromFirebase = this.store.select('state')
      .map(state => state);
  }

  add() {
    this.store.dispatch({type: 'ADD', payload: ''});
  }

  toggleConnection() {
    this.networkService.toggleConnection();
    this.refreshConnectionState();
  }

  ngOnInit() {
    this.refreshConnectionState();
  }

  refreshConnectionState() {
    this.connection = this.networkService.hasConnection();
  }
}
