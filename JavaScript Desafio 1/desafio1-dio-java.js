
/* Desafio Nota de Acordo com a Média */

const media = gets();

if (media < 5) {
    print('REP');
} else if (media >= 5 && media < 7) {
    print('REC');
} else {
    print('APR');
}

/* Desafio Maior Número Par e Menor Número Impar */

const n = gets();

let maiorNumeroPar = null;
let menorNumeroImpar = null;

for (let i = 0; i < n; i++) {
    const numero = parseInt(gets());

    if(numero % 2 === 0) {
        if (maiorNumeroPar === null || numero > maiorNumeroPar) {
            maiorNumeroPar = numero;
        }
    } else {
        if (menorNumeroImpar === null || numero < menorNumeroImpar) {
            menorNumeroImpar = numero;
        }
    }
}

print('Maior número par: ' + maiorNumeroPar);
print('Menor número impar: ' + menorNumeroImpar);

/* Desafio Cálculo Salarial */

function calcularImposto(salario) {
    let aliquota;
    if (salario < 1100) {
        aliquota = 0.05;
    } else if ( salario >= 1100 && salario < 2500) {
        aliquota = 0.10;
    } else {
        aliquota = 0.15;
    }
    return aliquota * salario;
}

const salarioBruto = parseFloat(gets());
const beneficios = parseFloat(gets());

const descontoSalario = calcularImposto(salarioBruto);
const pagamento = salarioBruto - descontoSalario + beneficios;

print(pagamento.toFixed(2));