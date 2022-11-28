import React from "react";
import "../src/App.css"
import { Container, Row, Col, Button, Form } from "react-bootstrap"
function App() {
  return (
    <Container style={{
      background: '#007bff',
      backgroundColor: 'transparent !important',
      width: "400px",
      padding: '5px',
      margin: '5px',
      borderRadius:'4px',
    }}>
      <Row>
        {/* xs = colunas padrao 12 e responsivo */}
        <Col xs="3">
          <Button variant="danger">C</Button>
        </Col>
        <Col xs="9">
          <Form.Control type="text" name="txtNumeros" class="text-right" readOnly="readonly" />
        </Col>
      </Row>

      <Row>
        <Col xs='3'>
          <Button variant="light"></Button>7
        </Col>
        <Col xs='3'>
          <Button variant="light"></Button>8
        </Col>
        <Col xs='3'>
          <Button variant="light"></Button>9
        </Col>
        <Col xs='3'>
          <Button variant="warning"></Button>/
        </Col>
      </Row>
      
      <Row>
        <Col xs='3'>
          <Button variant="light"></Button>4
        </Col>
        <Col xs='3'>
          <Button variant="light"></Button>5
        </Col>
        <Col xs='3'>
          <Button variant="light"></Button>6
        </Col>
        <Col xs='3'>
          <Button variant="warning"></Button>*
        </Col>
      </Row>

      <Row>
        <Col xs='3'>
          <Button variant="light"></Button>3
        </Col>
        <Col xs='3'>
          <Button variant="light"></Button>2
        </Col>
        <Col xs='3'>
          <Button variant="light"></Button>1
        </Col>
        <Col xs='3'>
          <Button variant="warning"></Button>-
        </Col>
      </Row>
      <Row>
        <Col xs='3'>
          <Button variant="light"></Button>0
        </Col>
        <Col xs='3'>
          <Button variant="light"></Button>.
        </Col>
        <Col xs='3'>
          <Button variant="light"></Button>=
        </Col>
        <Col xs='3'>
          <Button variant="warning"></Button>+
        </Col>
      </Row>

    </Container>

  );
}

export default App;
