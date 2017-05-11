import { connect } from 'react-redux'
import Editor from '../components/Editor/Editor'
import { setBackgroundColor, setSize, setBorderRadius } from '../actions/editorActions'
import { saveRectangle } from '../actions/galleryActions'

const mapStateToProps = (state) => {
  return {
    backgroundColor: state.editorReducer.backgroundColor,
    size: state.editorReducer.size,
    borderRadius: state.editorReducer.borderRadius
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setBackgroundColor: (val) => {
      dispatch(setBackgroundColor(val))
    },
    setSize: (val) => {
      dispatch(setSize(val))
    },
    setBorderRadius: (val) => {
      dispatch(setBorderRadius(val))
    },
    saveRectangle: (rect) => {
      dispatch(saveRectangle(rect))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor)
