import React from 'react'
import PropTypes from 'prop-types'

const Rectangle = (props) => {
  const { backgroundColor, size, borderRadius, onClick } = props
  const rectStyle = {
    backgroundColor: `${backgroundColor}`,
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: `${borderRadius}%`
  }

  return(
    <div className="Rectangle" style={rectStyle} onClick={onClick} />
  )
}

Rectangle.propTypes = {
  backgroundColor: PropTypes.string,
  size: PropTypes.string,
  borderRadius: PropTypes.string,
  onClick: PropTypes.func
}

export default Rectangle
