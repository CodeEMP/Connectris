import initialGameState from './initialGameState.js';
import * as types from '../actions/actionTypes';

export default function app (state, action) {
  if (state === undefined) {
    return initialGameState;
  }
  switch(action.type) {


    default :
      return state;
  }


}
