import addPoint from './addpoint.js';
import cycleColors from './colorcycle.js';
import coordCheck from './coordcheck.js';

export default function checkForLine(state,x,y,playerColor,alt) {
  //[][][][]
  var check=coordCheck(state,x+1,y,x+2,y,x+3,y,playerColor,alt);
  if (check===true) {
    state = cycleColors(state,x,y);
    state = cycleColors(state,x+1,y);
    state = cycleColors(state,x+2,y);
    state = cycleColors(state,x+3,y);
    state = addPoint(state);
    return state;
  }
  check=coordCheck(state,x-1,y,x+1,y,x+2,y,playerColor,alt);
  if (check===true) {
    state = cycleColors(state,x,y);
    state = cycleColors(state,x-1,y);
    state = cycleColors(state,x+1,y);
    state = cycleColors(state,x+2,y);
    state = addPoint(state);
    return state;
  }
  check=coordCheck(state,x-2,y,x-1,y,x+1,y,playerColor,alt);
  if (check===true) {
    state = cycleColors(state,x,y);
    state = cycleColors(state,x-2,y);
    state = cycleColors(state,x-1,y);
    state = cycleColors(state,x+1,y);
    state = addPoint(state);
    return state;
  }
  check=coordCheck(state,x-1,y,x-2,y,x-3,y,playerColor,alt);
  if (check===true) {
    state = cycleColors(state,x,y);
    state = cycleColors(state,x-1,y);
    state = cycleColors(state,x-2,y);
    state = cycleColors(state,x-3,y);
    state = addPoint(state);
    return state;
  }

  //[]
  //[]
  //[]
  //[]
  check=coordCheck(state,x,y+1,x,y+2,x,y+3,playerColor,alt);
  if (check===true) {
    state = cycleColors(state,x,y);
    state = cycleColors(state,x,y+1);
    state = cycleColors(state,x,y+2);
    state = cycleColors(state,x,y+3);
    state = addPoint(state);
    return state;
  }

  return state;
}
