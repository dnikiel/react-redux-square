import React from 'react'
import Rectangle from '../Rectangle/Rectangle'
import './Gallery.css'
import PropTypes from 'prop-types'

const Gallery = (props) => (
  <div className="Gallery">
    <h3>Gallery</h3>
    <p>Click on rectangle to remove it.</p>

    <div className="Gallery__items-container">
      {props.items.map((item, i) =>
        <Rectangle key={`rectangle-${i}`} onClick={props.deleteRectangle.bind(this, item)} {...item} />
      )}
    </div>
  </div>
)

Gallery.propTypes = {
  items: PropTypes.array,
  deleteRectangle: PropTypes.func
}

export default Gallery
