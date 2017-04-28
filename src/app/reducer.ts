import { Action } from '@ngrx/store';

export function reducer(state = [], action: Action)  {
  switch (action.type) {
    case 'ADD':
      return state;
    case 'ADDED':
      return [ ...state, action.payload ];
    case 'ACTION_ERROR':
      return state;
    default:
      return state;
  }
}
