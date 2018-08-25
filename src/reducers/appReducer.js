import initialAppState from './initialAppState.js';
import * as types from '../actions/actionTypes';

export default function app (state, action) {
  if (state === undefined) {
    return initialAppState;
  }
  switch(action.type) {


    default :
      return state;
  }


}
