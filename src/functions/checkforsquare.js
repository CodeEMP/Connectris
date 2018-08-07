import addPoint from './addpoint.js';
import cycleColors from './colorcycle.js';
import coordCheck from './coordcheck.js';

export default function checkForSquare(state,x,y,playerColor,alt) {
  //[][]
  //[][]
  var check=coordCheck(state,x+1,y,x,y+1,x+1,y+1,playerColor,alt);
  if (check===true) {
    state = cycleColors(state,x,y);
    state = cycleColors(state,x+1,y);
    state = cycleColors(state,x,y+1);
    state = cycleColors(state,x+1,y+1);
    state = addPoint(state);
    return state;
  }
  check=coordCheck(state,x-1,y,x,y+1,x-1,y+1,playerColor,alt);
  if (check===true) {
    state = cycleColors(state,x,y);
    state = cycleColors(state,x-1,y);
    state = cycleColors(state,x,y+1);
    state = cycleColors(state,x-1,y+1);
    state = addPoint(state);
    return state;
  }
  return state;
}
