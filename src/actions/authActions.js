import * as types from './actionTypes';

export function logIn (username, password) {
  return {type: type.LOG_IN,username, password}
}

export function register (username, email, password) {
  return {type: type.REGISTER, username, email, password}
}
