import { Injectable } from '@angular/core';

@Injectable()
export class NetworkService {
  connection: boolean;

  hasConnection(): boolean {
    return this.connection;
  }
}
