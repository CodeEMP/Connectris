import initialAuthState from './initialAuthState.js';
import * as types from '../actions/actionTypes';

export default function auth (state, action) {
  if (state === undefined) {
    return initialAuthState;
  }
  switch(action.type) {


    default :
      return state;
  }


}
