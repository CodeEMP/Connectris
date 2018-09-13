import {combineReducers} from 'redux';
import game from './gameReducer.js';
import auth from './authReducer.js'

const rootReducer = combineReducers({
  game,
  auth
})

export default rootReducer;
