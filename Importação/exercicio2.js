const { gets, print } = require('./auxiliar_ex2');

const entrada = [];

entrada.push(gets());
entrada.push(gets());
entrada.push(gets());
entrada.push(gets());
entrada.push(gets());

let maiorPar = 0;
let menorImpar = 0;

for (let i = 0; i < entrada.length; i++) {

    let ehPar = entrada[i] % 2

    if (ehPar === 0) {
        if (entrada[i] > maiorPar) {
            maiorPar = entrada[i];
        }
    } else {
        if (menorImpar === 0) {
            menorImpar = entrada[i];
        } else if (entrada[1] < menorImpar) {
            menorImpar = entrada[1];
        }
    }
}

print(maiorPar);
print(menorImpar);