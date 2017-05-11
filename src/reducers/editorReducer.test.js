import editorReducer from './editorReducer'
import * as types from '../actions/actionTypes'

describe('editor reducer', () => {
  const initialState = {
    backgroundColor: '#d9e3f0',
    size: '100',
    borderRadius: '0'
  }

  it('should return the initial state', () => {
    expect(
      editorReducer(undefined, {})
    ).toEqual(initialState)
  })

  it('should handle SET_BACKGROUND_COLOR', () => {
    expect(
      editorReducer(initialState, { type: types.SET_BACKGROUND_COLOR, val: '#000' })
    ).toEqual({
        ...initialState,
        backgroundColor: '#000'
      })
  })

  it('should handle SET_SIZE', () => {
    expect(
      editorReducer(initialState, { type: types.SET_SIZE, val: '20' })
    ).toEqual({
        ...initialState,
        size: '20'
      })
  })

  it('should handle SET_BORDER_RADIUS', () => {
    expect(
      editorReducer(initialState, { type: types.SET_BORDER_RADIUS, val: '10' })
    ).toEqual({
        ...initialState,
        borderRadius: '10'
      })
  })
})
