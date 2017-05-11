import React from 'react'
import './Editor.css'
import { BlockPicker } from 'react-color'
import { Button, Input, Row, Col } from 'muicss/react'
import PropTypes from 'prop-types'

const Editor = (props) => {
  const {backgroundColor, size, borderRadius} = props
  const setBackgroundColor = (color) => {
    props.setBackgroundColor(color.hex)
  }
  const setSize = (event) => {
    props.setSize(event.target.value)
  }
  const setBorderRadius = (event) => {
    props.setBorderRadius(event.target.value)
  }
  const saveRectangle = () => {
    props.saveRectangle({backgroundColor, size, borderRadius})
  }

  return (
    <div className="Editor">
      <h3>Editor</h3>

      <Row>
        <Col md="6">
          <label>Background Color:</label>
          <BlockPicker onChange={setBackgroundColor}
                        color={backgroundColor}
                        triangle='hide' />
        </Col>
        <Col md="6">
          <label htmlFor="editor-size">Size (px):</label>
          <Input id="editor-size"
                type="number"
                defaultValue={size}
                onChange={setSize} />

          <label htmlFor="editor-border-radius">Border Radius:</label>
          <input id="editor-border-radius"
                type="range"
                min="0"
                max="50"
                defaultValue={borderRadius}
                onChange={setBorderRadius} />

          <Button variant="raised"
                  color="primary"
                  onClick={saveRectangle}>
            Save Rectangle
          </Button>
        </Col>
      </Row>
    </div>
  )
}

Editor.propTypes = {
  backgroundColor: PropTypes.string,
  size: PropTypes.string,
  borderRadius: PropTypes.string,
  setBackgroundColor: PropTypes.func,
  setSize: PropTypes.func,
  setBorderRadius: PropTypes.func,
  saveRectangle: PropTypes.func
}

export default Editor
