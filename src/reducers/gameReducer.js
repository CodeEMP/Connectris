import initialGameState from './initialGameState.js';
import * as types from '../actions/actionTypes.js';
import dropPiece from '../functions/dropPiece.js';
import checkForScore from '../functions/checkforscore.js';

export default function game (state, action) {
  if (state === undefined) {
    return initialGameState;
  }
  switch (action.type) {
    case types.HOVER_CHANGE:
      var new_state = {...state};
      for (var i = 0; i < new_state.squares[new_state.rowHover].length; i++){
        if (new_state.squares[new_state.rowHover][i].color==='gray') {
          new_state.squares[new_state.rowHover][i].color='lightgray';
        }
      }
      new_state.rowHover = action.x;
      for (var j = 0; j < new_state.squares[new_state.rowHover].length; j++) {
        if (new_state.squares[new_state.rowHover][j].color==='lightgray') {
          new_state.squares[new_state.rowHover][j].color='gray';
        }
      }
      return new_state;

    case types.SQUARE_CLICK:
      var new_state = {...state};
      var piece = dropPiece(new_state.squares, action.x);
      new_state.squares[action.x][piece].color=new_state.currentPlayer;
      new_state = checkForScore(new_state,action.x,piece);
      if (new_state.currentPlayer==='Red') {
        new_state.currentPlayer='Blue';
      }
      else {
        new_state.currentPlayer='Red';
      }
      return new_state;

    default:
      return state;
  }
}
