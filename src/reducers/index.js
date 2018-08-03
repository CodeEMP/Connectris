import {combineReducers} from 'redux';
import game from './gameReducer.js';
import app from './appReducer.js';

const rootReducer = combineReducers({
  game,
  app
})

export default rootReducer;
