import { combineReducers } from 'redux'
import editorReducer from './editorReducer'
import galleryReducer from './galleryReducer'

const rootReducer = combineReducers({
  editorReducer,
  galleryReducer
})

export default rootReducer
