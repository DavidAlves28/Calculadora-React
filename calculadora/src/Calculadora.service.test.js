import React from "react";
import { ReactDOM } from "react";
import CalculadoraService from "./Calculadora.service"


// definir suite para realizar operacao JEST
describe('Teste do CalculadoraService', () => {

    const [calcular,concatenarNum, SOMA ,SUBTRACAO,DIVISAO,MULTIPLICAR] = CalculadoraService();
    //  caso 1: "SOMA"
    it('retornar que 2+2=4.', () => {
        let soma = calcular(2, 2, SOMA);
        expect(soma).toEqual(4)
    })
    it('retornar que 1 - 4 = -3 ',()=>{
        let subtracao = calcular(1,4,SUBTRACAO);
        expect(subtracao).toEqual(-3)
    } )
    it('retornar que 1/4 = 0.25 ', ()=>{
        let divisao = calcular(1,4, DIVISAO);
        expect(divisao).toEqual(0.25)
    })
    it('retornar que 1 * 4 = 4', ()=>{
        let multiplicar = calcular(1,4, MULTIPLICAR)
        expect(multiplicar).toEqual(4)
    })
    it('retornar 0 para operacao invalida', ()=>{
        let operacaoInvalida = calcular(1,3 , '%')
        expect(operacaoInvalida).toEqual(0)
    })

});