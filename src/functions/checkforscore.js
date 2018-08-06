import checkForSquare from './checkforsquare.js';
import checkForLine from './checkforline.js';
import checkForTee from './checkfortee.js';
import checkForEll from './checkforell.js';
import checkForZee from './checkforzee.js';
import checkForEss from './checkforess.js';
import checkForLee from './checkforlee.js';

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
    else if (state.redShape==='Ell') {
      state = checkForEll(state,x,y,state.currentPlayer,alt)
    }
    else if (state.redShape==='Lee') {
      state = checkForLee(state,x,y,state.currentPlayer,alt)
    }
    else if (state.redShape==='Ess') {
      state = checkForEss(state,x,y,state.currentPlayer,alt)
    }
    else if (state.redShape==='Zee') {
      state = checkForZee(state,x,y,state.currentPlayer,alt)
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
    else if (state.blueShape==='Ell') {
      state = checkForEll(state,x,y,state.currentPlayer,alt)
    }
    else if (state.blueShape==='Lee') {
      state = checkForLee(state,x,y,state.currentPlayer,alt)
    }
    else if (state.blueShape==='Ess') {
      state = checkForEss(state,x,y,state.currentPlayer,alt)
    }
    else if (state.blueShape==='Zee') {
      state = checkForZee(state,x,y,state.currentPlayer,alt)
    }
  }
  return state;
}
