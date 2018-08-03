import * as types from './actionTypes';

export function hoverChange(x) {
  return {type: types.HOVER_CHANGE, x}
}

export function squareClick(x,y) {
  return {type: types.SQUARE_CLICK, x, y}
}
