//teste de laço de repetição para calcular fatorial

function factorial(x) {
    resposta = 1
    while(x>1){
        resposta *= x
        x--
    }
    return resposta
}

console.log(factorial(5))