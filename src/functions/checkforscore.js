import checkForSquare from './checkforsquare.js';
import checkForLine from './checkforline.js';
import checkForTee from './checkfortee.js';

export default function checkForScore(state,x,y) {
  if (state.currentPlayer==='Red') {
    var alt = 'HotPink';
    if (state.redShape==='Square') {
      state = checkForSquare(state,x,y,state.currentPlayer,alt);
    }
    else if (state.redShape==='Line') {
      state = checkForLine(state,x,y,state.currentPlayer,alt);
    }
    else if (state.redShape==='Tee') {
      state = checkForTee(state,x,y,state.currentPlayer,alt);
    }
  }
  else if (state.currentPlayer==='Blue'){
    var alt = 'RoyalBlue';
    if (state.blueShape==='Square') {
      state = checkForSquare(state,x,y,state.currentPlayer,alt);
    }
    else if (state.blueShape==='Line') {
      state = checkForLine(state,x,y,state.currentPlayer,alt);
    }
    else if (state.blueShape==='Tee') {
      state = checkForTee(state,x,y,state.currentPlayer,alt);
    }
  }
  return state;
}
