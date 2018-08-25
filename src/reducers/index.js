import {combineReducers} from 'redux';
import game from './gameReducer.js';
import app from './appReducer.js';
import auth from './auth.js'

const rootReducer = combineReducers({
  game,
  app,
  auth
})

export default rootReducer;
