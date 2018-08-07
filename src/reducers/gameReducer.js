import initialGameState from './initialGameState.js';
import * as types from '../actions/actionTypes.js';
import dropPiece from '../functions/dropPiece.js';
import checkForScore from '../functions/checkforscore.js';
import shapeFour from '../functions/shapeFour.js';

export default function game (state, action) {
  if (state === undefined) {
    var new_state = initialGameState;
    return new_state;
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
      if (new_state.squares[action.x][0].color==='gray'){
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
      }
      else {
        return new_state;
      }


      case types.GAME_SETUP:
        var new_state = {...state};
        var red = shapeFour();
        var blue = shapeFour();
        new_state.redShape=red;
        new_state.blueShape=blue;
        var num = Math.floor(Math.random() * (2) ) + 1;
        if (num===1) {
          new_state.currentPlayer="Red";
        }
        else {
          new_state.currentPlayer="Blue";
        }
        return new_state;

      case types.RESET_GAME:
        var new_state = {...state};
        for (var i = 0; i < new_state.squares.length; i++) {
          for (var j = 0; j < new_state.squares[i].length; j++) {
            new_state.squares[i][j].color='lightgray';
          }
        }
        var red = shapeFour();
        var blue = shapeFour();
        new_state.redShape=red;
        new_state.blueShape=blue;
        var num = Math.floor(Math.random() * (2) ) + 1;
        if (num===1) {
          new_state.currentPlayer="Red";
        }
        else {
          new_state.currentPlayer="Blue";
        }
        return new_state;

    default:
      return state;
  }
}
