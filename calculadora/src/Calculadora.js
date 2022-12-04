import React, { useState } from "react";
import "../src/Calculadora.css"
import { Container, Row, Col, Button, Form } from "react-bootstrap"
import CalculadoraService from "./Calculadora.service"

function Calculadora() {
  const [calcular, concatenarNum, SOMA, SUBTRACAO, DIVISAO, MULTIPLICAR] = CalculadoraService();

  //  ESTADOS
  const [txtNumber, setTxtNumber] = useState('0');
  const [numero1, setNumero1] = useState('0');
  const [numero2, setNumero2] = useState(null);
  const [operacao, setOperacao] = useState(null);


  function addNumber(numero) {
    let resultado;
    if (operacao === null) {
      resultado = concatenarNum(numero1, numero)
      setNumero1(resultado)
    } else {
      resultado = concatenarNum(numero2, numero)
      setNumero2(resultado)
    }
    setTxtNumber(resultado)

  }
  function operadores(op) {
    // apenas define caso ela nao exita
    if (operacao === null) {
      setOperacao(op)
      return;
    }
    // caso a operacao estiver definida numero 2 selecionado, realiza o calculo
    if (numero2 !== null) {
      // parseFloat para nao contat
      const resultado = calcular(parseFloat(numero1), parseFloat(numero2), operacao)
      setOperacao(op)
      setNumero1(resultado.toString())
      setNumero2(null)
      setTxtNumber(resultado.toString())
    }
  }

  function retornoCalcular() {
    if (numero2 === null) {
      return;
    }
    const resultado = calcular(parseFloat(numero1),parseFloat(numero2),operacao)
    setTxtNumber(resultado)
  }
  function limparTxtNumber (){
    setTxtNumber('0')
    setNumero1('0')
    setNumero2(null)
    setOperacao(null)
  }

  return (
    <Container style={{
      background: `#2222`,
      backgroundColor: 'transparent !important',
      width: "400px",
      padding: '5px',
      margin: '5px',
      borderRadius: '4px',

    }}>
      <Row>
        {/* xs = colunas padrao 12 e responsivo */}
        <Col xs="3">
          <Button variant="danger" onClick={limparTxtNumber} >C</Button>
        </Col>
        <Col xs="9">
          <Form.Control type="text" name="txtNumber" className="text-right" readOnly="readonly" value={txtNumber} data-testid='txtNumber' />
        </Col>
      </Row>

      <Row>
        <Col xs='3'>
          <Button variant="light" onClick={() => addNumber('7')}>7</Button>
        </Col>
        <Col xs='3'>
          <Button variant="light" onClick={() => addNumber('8')}>8</Button>
        </Col>
        <Col xs='3'>
          <Button variant="light" onClick={() => addNumber('9')}>9</Button>
        </Col>
        <Col xs='3'>
          <Button variant="warning" onClick={() => operadores(DIVISAO)}>/</Button>
        </Col>
      </Row>

      <Row>
        <Col xs='3'>
          <Button variant="light" onClick={() => addNumber('4')} >4</Button>
        </Col>
        <Col xs='3'>
          <Button variant="light" onClick={() => addNumber('5')}>5</Button>
        </Col>
        <Col xs='3'>
          <Button variant="light" onClick={() => addNumber('6')}>6</Button>
        </Col>
        <Col xs='3'>
          <Button variant="warning" onClick={() => operadores(MULTIPLICAR)} >*</Button>
        </Col>
      </Row>

      <Row>
        <Col xs='3'>
          <Button variant="light" onClick={() => addNumber('1')}>1</Button>
        </Col>
        <Col xs='3'>
          <Button variant="light" onClick={() => addNumber('2')}>2</Button>
        </Col>
        <Col xs='3'>
          <Button variant="light" onClick={() => addNumber('3')}>3</Button>
        </Col>
        <Col xs='3'>
          <Button variant="warning" onClick={() => operadores(SUBTRACAO)}>-</Button>
        </Col>
      </Row>
      <Row>
        <Col xs='3'>
          <Button variant="light" onClick={() => addNumber('0')}>0</Button>
        </Col>
        <Col xs='3'>
          <Button variant="light" onClick={() => addNumber('.')}>.</Button>
        </Col>
        <Col xs='3'>
          <Button variant="warning"  onClick={retornoCalcular}>=</Button>
        </Col>
        <Col xs='3'>
          <Button variant="success" onClick={() => operadores(SOMA)} >+</Button>
        </Col>
      </Row>

    </Container>

  );
}

export default Calculadora;
