import * as types from './actionTypes';

export function hoverChange(x) {
  return {type: types.HOVER_CHANGE, x}
}

export function squareClick(x,y) {
  return {type: types.SQUARE_CLICK, x, y}
}

export function gameSetUp() {
  return {type: types.GAME_SETUP}
}

export function resetGame() {
  return {type: types.RESET_GAME}
}
