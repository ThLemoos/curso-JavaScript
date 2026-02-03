// Estrutura de repetição for

// Formato:
// Vamos supor que queremos que o nosso programa nos dê os números de 0 a 5

for (let i = 0; i <= 5; i++) {
    console.log(i);
}

console.log('<=>');

// Agora vamos fazer com que os numeros apareçam de 10 em 10

for (let i = 0; i <= 100; i += 10) {
    console.log(i);
}

console.log('<=>')

// Começando com número negativo 

for (let i = -100; i <= 500; i += 10) {
    console.log(i);
}

console.log('<=>')

// Fazendo de trás para frente

for (let i = 500; i >= 400; i -= 10) {
    console.log(i);
}

console.log('<=>')

// Checar se um número é par ou ímpar

for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'Par' : 'Ímpar' // A interrogação diz "se a divisão por 2 for igual a zero mostrar 'par'", e os dois pontos funciona como "senão mostre ímpar".
    console.log(i, par);
}

console.log('<=>')

// Percorrendo um array com for

const frutas = ['Maçã', 'Pêra', 'Uva'];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}