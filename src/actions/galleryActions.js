import * as types from './actionTypes'

export function saveRectangle(rect) {
  return { type: types.SAVE_RECTANGLE, rect }
}

export function deleteRectangle(rect) {
  return { type: types.DELETE_RECTANGLE, rect }
}
