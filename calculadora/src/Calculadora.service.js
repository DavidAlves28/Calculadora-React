export default function CalculadoraService() {
    // Operadores
    const SOMA = '+';
    const SUBTRACAO = '-';
    const DIVISAO = '/';
    const MULTIPLICAR = "*"

    // função para cada operador, 
    function calcular(num1, num2, operacao) {
        let resultado;
        switch (operacao) {
            case SOMA:
                resultado = num1 + num2
                break;
            case SUBTRACAO:
                resultado = num1 - num2;
                break;
            case DIVISAO:
                resultado = num1 / num2;
                break;
            case MULTIPLICAR:
                resultado = num1 * num2;
                break;
                default:
                    resultado = 0 ;
        }
        return resultado
    }

    // função para casos de '.' , '0' e números negativos.
    function concatenarNum (numAtual , numConcat){
        //  caso contenha apenas '0' ou null . define como string vazia.
        if(numAtual === '0'|| numAtual === null){
            numAtual = "";
        }
        // quando o primeiro digito for '.' concatena '0' antes do ponto
        if(numConcat === '.' && numAtual === ''){
            return '0.';
        }
        //  caso '.' digitado ja contenha um ponto , apenas retornar
        if(numConcat === '.' && numAtual.indexOf('.')> -1){
            return numAtual;
        }
        return numAtual + numConcat;
        }
    return [
        calcular, concatenarNum, SOMA, SUBTRACAO, DIVISAO , MULTIPLICAR
    ]
} 