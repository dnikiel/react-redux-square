import { connect } from 'react-redux'
import Gallery from '../components/Gallery/Gallery'
import { deleteRectangle } from '../actions/galleryActions'

const mapStateToProps = (state) => {
  return {
    items: state.galleryReducer.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteRectangle: (rect) => {
      dispatch(deleteRectangle(rect))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)
