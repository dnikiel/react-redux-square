import React from 'react'
import Rectangle from '../Rectangle/Rectangle'
import './Output.css'
import { Panel } from 'muicss/react'

const Output = (props) => {
  return(
    <Panel className="Output">
      <h3>Output</h3>
      <Rectangle {...props} />
    </Panel>
  )
}

export default Output
