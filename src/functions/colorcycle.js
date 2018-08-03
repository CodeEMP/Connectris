export default function cycleColors(state,x,y) {
  if (state.squares[x][y].color==='Red'){
    state.squares[x][y].color='HotPink';
  }
  else if (state.squares[x][y].color==='Blue'){
    state.squares[x][y].color='RoyalBlue';
  }
  else if (state.squares[x][y].color==='HotPink'){
    state.squares[x][y].color='Purple';
  }
  else if (state.squares[x][y].color==='RoyalBlue'){
    state.squares[x][y].color='Purple';
  }
  else if (state.squares[x][y].color==='Purple'){
    state.squares[x][y].color='Black';
  }
  return state;
}
