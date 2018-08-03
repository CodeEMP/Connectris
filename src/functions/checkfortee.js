import addPoint from './addpoint.js';
import cycleColors from './colorcycle.js';

export default function checkForTee(state,x,y,playerColor,alt) {
  if (x-1>=0&&y+1<=8&&x+1<=8&&(state.squares[x-1][y+1].color===playerColor||state.squares[x-1][y+1].color===alt||state.squares[x-1][y+1].color==='Purple')&&
  (state.squares[x][y+1].color===playerColor||state.squares[x][y+1].color===alt||state.squares[x][y+1].color==='Purple')&&
  (state.squares[x+1][y+1].color===playerColor||state.squares[x+1][y+1].color===alt||state.squares[x+1][y+1].color==='Purple')) {
    state = cycleColors(state,x,y);
    state = cycleColors(state,x-1,y+1);
    state = cycleColors(state,x,y+1);
    state = cycleColors(state,x+1,y+1);
    state = addPoint(state);
  }
  else if (x+1<=8&&y-1>=0&&x+2<=8&&(state.squares[x+1][y].color===playerColor||state.squares[x+1][y].color===alt||state.squares[x+1][y].color==='Purple')&&
  (state.squares[x+1][y-1].color===playerColor||state.squares[x+1][y-1].color===alt||state.squares[x+1][y-1].color==='Purple')&&
  (state.squares[x+2][y].color===playerColor||state.squares[x+2][y].color===alt||state.squares[x+2][y].color==='Purple')) {
    state = cycleColors(state,x,y);
    state = cycleColors(state,x+1,y);
    state = cycleColors(state,x+1,y-1);
    state = cycleColors(state,x+2,y);
    state = addPoint(state);
  }
  else if (x-1>=0&&y-1>=0&&x-2>=0&&(state.squares[x-1][y].color===playerColor||state.squares[x-1][y].color===alt||state.squares[x-1][y].color==='Purple')&&
  (state.squares[x-1][y-1].color===playerColor||state.squares[x-1][y-1].color===alt||state.squares[x-1][y-1].color==='Purple')&&
  (state.squares[x-2][y].color===playerColor||state.squares[x-2][y].color===alt||state.squares[x-2][y].color==='Purple')) {
    state = cycleColors(state,x,y);
    state = cycleColors(state,x-1,y);
    state = cycleColors(state,x-1,y-1);
    state = cycleColors(state,x-2,y);
    state = addPoint(state);
  }

  else if (y+1<=8&&y+2<=8&&x+1<=8&&(state.squares[x][y+1].color===playerColor||state.squares[x][y+1].color===alt||state.squares[x][y+1].color==='Purple')&&
  (state.squares[x][y+2].color===playerColor||state.squares[x][y+2].color===alt||state.squares[x][y+2].color==='Purple')&&
  (state.squares[x+1][y+1].color===playerColor||state.squares[x+1][y+1].color===alt||state.squares[x+1][y+1].color==='Purple')) {
    state = cycleColors(state,x,y);
    state = cycleColors(state,x,y+1);
    state = cycleColors(state,x,y+2);
    state = cycleColors(state,x+1,y+1);
    state = addPoint(state);
  }
  else if (x-1>=0&&y-1>=0&&y+1<=8&&(state.squares[x-1][y-1].color===playerColor||state.squares[x-1][y-1].color===alt||state.squares[x-1][y-1].color==='Purple')&&
  (state.squares[x-1][y].color===playerColor||state.squares[x-1][y].color===alt||state.squares[x-1][y].color==='Purple')&&
  (state.squares[x-1][y+1].color===playerColor||state.squares[x-1][y+1].color===alt||state.squares[x-1][y+1].color==='Purple')) {
    state = cycleColors(state,x,y);
    state = cycleColors(state,x-1,y-1);
    state = cycleColors(state,x-1,y);
    state = cycleColors(state,x-1,y+1);
    state = addPoint(state);
  }

  else if (x+1<=8&&y-1>=0&&y+1<=8&&(state.squares[x+1][y-1].color===playerColor||state.squares[x+1][y-1].color===alt||state.squares[x+1][y-1].color==='Purple')&&
  (state.squares[x+1][y].color===playerColor||state.squares[x+1][y].color===alt||state.squares[x+1][y].color==='Purple')&&
  (state.squares[x+1][y+1].color===playerColor||state.squares[x+1][y+1].color===alt||state.squares[x+1][y+1].color==='Purple')) {
    state = cycleColors(state,x,y);
    state = cycleColors(state,x+1,y-1);
    state = cycleColors(state,x+1,y);
    state = cycleColors(state,x+1,y+1);
    state = addPoint(state);
  }
  else if (x-1>=0&&y+1<=8&&y+2<=8&&(state.squares[x-1][y+1].color===playerColor||state.squares[x-1][y+1].color===alt||state.squares[x-1][y+1].color==='Purple')&&
  (state.squares[x][y+1].color===playerColor||state.squares[x][y+1].color===alt||state.squares[x][y+1].color==='Purple')&&
  (state.squares[x][y+2].color===playerColor||state.squares[x][y+2].color===alt||state.squares[x][y+2].color==='Purple')) {
    state = cycleColors(state,x,y);
    state = cycleColors(state,x-1,y+1);
    state = cycleColors(state,x,y+1);
    state = cycleColors(state,x,y+2);
    state = addPoint(state);
  }

  else if (x+1<=8&&y+1<=8&&x+2<=8&&(state.squares[x+1][y].color===playerColor||state.squares[x+1][y].color===alt||state.squares[x+1][y].color==='Purple')&&
  (state.squares[x+1][y+1].color===playerColor||state.squares[x+1][y+1].color===alt||state.squares[x+1][y+1].color==='Purple')&&
  (state.squares[x+2][y].color===playerColor||state.squares[x+2][y].color===alt||state.squares[x+2][y].color==='Purple')) {
    state = cycleColors(state,x,y);
    state = cycleColors(state,x+1,y);
    state = cycleColors(state,x+1,y+1);
    state = cycleColors(state,x+2,y);
    state = addPoint(state);
  }
  else if (x-1>=0&&y+1<=8&&x+1<=8&&(state.squares[x-1][y].color===playerColor||state.squares[x-1][y].color===alt||state.squares[x-1][y].color==='Purple')&&
  (state.squares[x][y+1].color===playerColor||state.squares[x][y+1].color===alt||state.squares[x][y+1].color==='Purple')&&
  (state.squares[x+1][y].color===playerColor||state.squares[x+1][y].color===alt||state.squares[x+1][y].color==='Purple')) {
    state = cycleColors(state,x,y);
    state = cycleColors(state,x-1,y);
    state = cycleColors(state,x,y+1);
    state = cycleColors(state,x+1,y);
    state = addPoint(state);
  }
  else if (x-2>=0&&x-1>=0&&y+1<=8&&(state.squares[x-2][y].color===playerColor||state.squares[x-2][y].color===alt||state.squares[x-2][y].color==='Purple')&&
  (state.squares[x-1][y].color===playerColor||state.squares[x-1][y].color===alt||state.squares[x-1][y].color==='Purple')&&
  (state.squares[x-1][y+1].color===playerColor||state.squares[x-1][y+1].color===alt||state.squares[x-1][y+1].color==='Purple')) {
    state = cycleColors(state,x,y);
    state = cycleColors(state,x-2,y);
    state = cycleColors(state,x-1,y);
    state = cycleColors(state,x-1,y+1);
    state = addPoint(state);
  }
  return state;
}
