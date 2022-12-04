import React, { useState } from "react";
import "../src/Calculadora.css"
import { Container, Row, Col, Button, Form } from "react-bootstrap"
import CalculadoraService from "./Calculadora.service"

function Calculadora() {
  const [calcular, concatenarNum, SOMA, SUBTRACAO, DIVISAO, MULTIPLICAR] = CalculadoraService();

  //  ESTADOS
  // input dos números 
  const [txtNumber, setTxtNumber] = useState('0');
  // Estado para primeiro número 
  const [numero1, setNumero1] = useState('0');
  // Estado para segundo número 
  const [numero2, setNumero2] = useState(null);
  // Estado para operadores númericos
  const [operacao, setOperacao] = useState(null);

  //  se  o operador numerico não for definido. função  rendiriza  número1  e concatena com mais números.
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

  // função dos operadores númericos 
  function operadores(op) {
    // apenas define caso ela não exita. quando chamada pelo operador o parâmetro difine o tipo de operacao.
    if (operacao === null) {
      setOperacao(op) // espera o Operador como parâmetro (multiplicar,soma,subtração,divisão)
      return;
    }
    // caso a operação estiver definida numero2 selecionado, realiza o calculo
    if (numero2 !== null) {
      // function calcular() , o parseFloat( ) converse para string primeiro e retonra número decimal para não concatenar com números enquanto o numero2 esta sendo digitado. 
      const resultado = calcular(parseFloat(numero1), parseFloat(numero2), operacao)//operação
      setOperacao(op)
      setNumero1(resultado.toString())
      setNumero2(null)
      setTxtNumber(resultado.toString())
    }
  }
  //  função botão "= " imprimi resultado da operação.
  function retornoCalcular() {
    if (numero2 === null) {
      return;
    }
    //   a funcão é executada e o Estado setTxtNumber  imprimi resultado da operação.
    const resultado = calcular(parseFloat(numero1), parseFloat(numero2), operacao) // operação 
    setTxtNumber(resultado) // resultado
  }

  // função botão 'C' limpa todos os Estados ao  padrão. 
  function limparTxtNumber() {
    setTxtNumber('0')
    setNumero1('0')
    setNumero2(null)
    setOperacao(null)
  }

  return (
    
    <Container style={{
      background: `#1a237e`,
      backgroundColor: 'transparent !important',
      width: "500px",
      padding: '5px',
      margin: '100px',
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
          <Button variant="success" onClick={() => operadores(DIVISAO)}>/</Button>
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
          <Button variant="success" onClick={() => operadores(MULTIPLICAR)} >*</Button>
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
          <Button variant="success" onClick={() => operadores(SUBTRACAO)}>-</Button>
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
          <Button variant="warning" onClick={retornoCalcular}>=</Button>
        </Col>
        <Col xs='3'>
          <Button variant="success" onClick={() => operadores(SOMA)} >+</Button>
        </Col>
      </Row>

    </Container>

  );
}

export default Calculadora;
