import * as types from './actionTypes'

export function setBackgroundColor(val) {
  return { type: types.SET_BACKGROUND_COLOR, val }
}

export function setSize(val) {
  return { type: types.SET_SIZE, val }
}

export function setBorderRadius(val) {
  return { type: types.SET_BORDER_RADIUS, val }
}
