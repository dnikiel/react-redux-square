import { connect } from 'react-redux'
import Output from '../components/Output/Output'

const mapStateToProps = (state) => {
  return {
    backgroundColor: state.editorReducer.backgroundColor,
    size: state.editorReducer.size,
    borderRadius: state.editorReducer.borderRadius
  }
}

export default connect(mapStateToProps)(Output)
