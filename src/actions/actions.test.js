import * as types from './actionTypes'
import * as editorActions from './editorActions'
import * as galleryActions from './galleryActions'

describe('actions', () => {
  it('should create an action to set background color', () => {
    const val = '#d9e3f0'
    const expectedAction = { type: types.SET_BACKGROUND_COLOR, val }

    expect(editorActions.setBackgroundColor(val)).toEqual(expectedAction)
  })

  it('should create an action to set size', () => {
    const val = '100'
    const expectedAction = { type: types.SET_SIZE, val }

    expect(editorActions.setSize(val)).toEqual(expectedAction)
  })

  it('should create an action to set border radius', () => {
    const val = '0'
    const expectedAction = { type: types.SET_BORDER_RADIUS, val }

    expect(editorActions.setBorderRadius(val)).toEqual(expectedAction)
  })

  it('should create an action to save rectangle', () => {
    const rect = {}
    const expectedAction = { type: types.SAVE_RECTANGLE, rect }

    expect(galleryActions.saveRectangle(rect)).toEqual(expectedAction)
  })

  it('should create an action to delete rectangle', () => {
    const rect = {}
    const expectedAction = { type: types.DELETE_RECTANGLE, rect }

    expect(galleryActions.deleteRectangle(rect)).toEqual(expectedAction)
  })
})
