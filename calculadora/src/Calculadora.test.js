import React from 'react';
import Calculadora from './Calculadora';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
describe('Calculadora', () => {

  //testes


  it('deve renderizar o componente sem erros', () => {
    const { getByText } = render(<Calculadora />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  // fireEvent.Click  simula click do mouse para os testes.
  // expect() define oque será esperado no teste como resultado.
  // toHaveValue() resultado esperado do teste. nesse caso da  operação.

  //teste 1 

  it('deve limpar o campo de numeros', () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent.click(getByText('2'))
    fireEvent.click(getByText('C'))
    expect(getByTestId("txtNumber")).toHaveValue('0')
  })
  //teste 2

  it('deve subtracao 5 - 3 e obter 2 ', () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent.click(getByText('5'))
    fireEvent.click(getByText('-'))
    fireEvent.click(getByText('3'))
    fireEvent.click(getByText('='))
    expect(getByTestId("txtNumber")).toHaveValue('2')
  })
  //teste 3

  it('deve multiplicar 2 * 3 e obter 6 ', () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent.click(getByText('2'))
    fireEvent.click(getByText('*'))
    fireEvent.click(getByText('3'))
    fireEvent.click(getByText('='))
    expect(getByTestId("txtNumber")).toHaveValue('6')
  })
  //teste 4

  it('deve dividir 6 / 3 e obter 1 ', () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent.click(getByText('6'))
    fireEvent.click(getByText('/'))
    fireEvent.click(getByText('3'))
    fireEvent.click(getByText('='))
    expect(getByTestId("txtNumber")).toHaveValue('2')
  })
  //teste 5

  it('deve somar 2 + 3 e obter 5 ', () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent.click(getByText('2'))
    fireEvent.click(getByText('+'))
    fireEvent.click(getByText('3'))
    fireEvent.click(getByText('='))
    expect(getByTestId("txtNumber")).toHaveValue('5')
  })
  //teste 6 

  it('deve somar 2.5 + 3 e obter 5.5', () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent.click(getByText('2'))
    fireEvent.click(getByText('.'))
    fireEvent.click(getByText('5'))
    fireEvent.click(getByText('+'))
    fireEvent.click(getByText('3'))
    fireEvent.click(getByText('='))
    expect(getByTestId("txtNumber")).toHaveValue('5.5')
  })
})