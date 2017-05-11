import galleryReducer from './galleryReducer'
import * as types from '../actions/actionTypes'

describe('gallery reducer', () => {
  const initialState = {
    items: []
  }

  it('should return the initial state', () => {
    expect(
      galleryReducer(undefined, {})
    ).toEqual(initialState)
  })

  it('should handle SAVE_RECTANGLE', () => {
    expect(
      galleryReducer(initialState, { type: types.SAVE_RECTANGLE, rect: {
        backgroundColor: '#37d67a',
        size: '200',
        borderRadius: '10'
      } })
    ).toEqual({
        ...initialState,
        items: [{
          backgroundColor: '#37d67a',
          size: '200',
          borderRadius: '10'
        }]
      })
  })

  it('should handle DELETE_RECTANGLE', () => {
    const populatedState = {
      items: [{
        backgroundColor: '#37d67a',
        size: '200',
        borderRadius: '10'
      }]
    }
    const rect = populatedState.items[0]

    expect(
      galleryReducer(populatedState, { type: types.DELETE_RECTANGLE, rect })
    ).toEqual({
        ...initialState
      })
  })
})
