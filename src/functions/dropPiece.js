export default function dropPiece(squares, x) {
  for (var i = 0; i < squares[x].length; i++) {
    if (i===8&&squares[x][8].color==='gray'){
      return 8;
    }
    else if (squares[x][i].color!=='gray') {
      return i-1;
    }
    else {
      continue
    }
  }
}
