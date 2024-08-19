function adicao(a, b){
    return a + b;
}

function subtracao(a, b){
    return a - b;
}

function multiplicacao(a, b){
    return a * b;
}

function divisao(a, b){
    if(b === 0){
    return "erro";
    }
    return a / b;
}

module.exports = { adicao, subtracao, multiplicacao, divisao, };