export default function coordCheck(state,x2,y2,x3,y3,x4,y4,playerColor,alt) {
  if ((x2>=0&&x2<=8)&&(y2>=0&&y2<=8)&&(x3>=0&&x3<=8)&&(y3>=0&&y3<=8)&&(x4>=0&&x4<=8)&&(y4>=0&&y4<=8)) {
    if ((state.squares[x2][y2].color===playerColor||state.squares[x2][y2].color===alt||state.squares[x2][y2].color==='Purple')&&
    (state.squares[x3][y3].color===playerColor||state.squares[x3][y3].color===alt||state.squares[x3][y3].color==='Purple')&&
    (state.squares[x4][y4].color===playerColor||state.squares[x4][y4].color===alt||state.squares[x4][y4].color==='Purple')) {
      return true;
    }
    else {
        return false;
    }
  }
  else {
    return false;
  }
}
