import shapeFour from './shapeFour.js';

export default function addPoint(state) {
  if (state.currentPlayer==='Red') {
    state.redShape = shapeFour();
    state.redPoints += 1;
  }
  else if (state.currentPlayer==='Blue') {
    state.blueShape = shapeFour();
    state.bluePoints += 1;
  }
  return state;
}
