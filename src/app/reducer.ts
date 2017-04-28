import { Action } from '@ngrx/store';

export function reducer(state = [], action: Action)  {
  console.log(action);
  switch (action.type) {
    case 'ADD':
      return state;
    case 'ACTION_ERROR':
      return state;
    case 'WAITING_NETWORK':
      return state;
    case 'SUCCESS' :
      return state;
    default:
      return state;
  }
}
