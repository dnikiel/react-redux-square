import React from 'react'
import { Container, Row, Col } from 'muicss/react'
import AppHeader from './components/AppHeader/AppHeader'
import Editor from './containers/editorContainer'
import Output from './containers/outputContainer'
import Gallery from './containers/galleryContainer'

const App = () => (
  <div className="App">
    <AppHeader />
    <Container>
      <Row>
        <Col md="6">
          <Editor />
        </Col>
        <Col md="6">
          <Output />
        </Col>
      </Row>
      <Gallery />
    </Container>
  </div>
)

export default App
