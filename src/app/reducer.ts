import { Action } from '@ngrx/store';

export function reducer(state = [], action: Action)  {
  switch (action.type) {
    case 'ADD':
      return [ ...state, action.payload ];
    case 'ADDED':
      console.log('Now stuff has been added to firebase');
      return state;
    case 'ACTION_ERROR':
      return state;
    default:
      return state;
  }
}
