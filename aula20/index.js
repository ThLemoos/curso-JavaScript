// Operadores aritméticos

// Operador (+): ele serve pra somar dois números, concatenar duas strings ou uma string com um número 

const num1 = 5;
const num2 = 10;

console.log(num1 + num2); // Resultado: 15. Irá somar os números

// Agora, se um número for uma string e o outro um número inteiro ou real:

const num3 = '5';
const num4 = 10;

console.log(num3 + num4); // Aqui irá concatenar e não somar, resultando em 510.

console.log('===============');

/*
Operadores (-), (/), e (*):
fazem, respectivamente:
Subtração
Divisão
Multiplicação
*/

// Operador (**): Serve para fazer a potenciação de um número

const num5 = 2;
const num6 = 10;

console.log(num5 ** num6); // Resultado: 1024

console.log('===============');

// Operador (%): Módulo ou Resto da Divisão

const num7 = 10;
const num8 = 3;
const num9 = 2;

console.log(10 % 3); // Dará 1, pois é o resto da divisão de 10/3
console.log(num7 % num9); // Dará zero porque a divisão é inteira e tem um resto inteiro

console.log('===============');

// Operador de Incremento (++): Serve para acrescentar o valor de 1 a uma variável

let contador = 1;
contador++

console.log(contador); // Resultado: 2

// Pode ser feito assim também: *NÃO É UMA BOA PRÁTICA DE PROGRAMAÇÃO*

let exemplo2 = 1;
console.log(exemplo2++); // Nessa linha ele não nos dará o valor de 2, pois está mostrando o valor antigo
console.log(exemplo2); // Aqui ele nos dará o valor de 2 pois foi somado acima, só não foi mostrado

// E pode ser feito assim também: *NÃO É UMA BOA PRÁTICA DE PROGRAMAÇÃO*

let exemplo3 = 1;
console.log(++exemplo3); // Aqui ele já soma e nos dá o valor de 2

let exemplo4 = 1;
exemplo4++; // valor 2
exemplo4++; // valor 3
exemplo4++; // valor 4
exemplo4++; // valor 5
console.log(exemplo4); // Nos dará o último valor, que é 5

console.log('===============');

// Operador de Decremento (--): Serve para dimninuir o valor de 1 a uma variável e funciona com todas as regras que tem para o operador de incremento

let contadorDecremento = 10;
contadorDecremento--;

console.log(contadorDecremento); // Terá o resultado 9

console.log('===============');

// Se quisermos acrescentar mais do que o valor 1 a uma variável podemos fazer assim:

const  passo = 2;
let contadorMaior = 1;
contadorMaior = contadorMaior + passo;

console.log(contadorMaior); // Terá o valor de 3

// Mas para uma boa prática de programação e um "atalho" podemos usar os OPERADORES DE ATRIBUIÇÃO (+=), (*=), (-=), (**=)...

const passo1 = 2;
let contadorAtribuicao = 0;
contadorAtribuicao += passo; // É lido assim: contadorAtribuicao = contadorAtribuicao + passo;

console.log(contadorAtribuicao); // Resultado 2

const passo2 = 2;
let contadorAtribuicao2 = 2;
contadorAtribuicao2 *= passo2; // É lido assim: contadorAtribuicao2 = contadorAtribuicao2 * passo2;

console.log(contadorAtribuicao2); // Resultado 4

console.log('===============');

// Convertendo uma string em um número:
// Modo 1: Número inteiro: praseInt()

const numInt1 = 10;
const numInt2 = parseInt('5'); // Está dizendo para transformar essa string que contém um número em número inteiro

console.log(numInt1 + numInt2);

// Se for feito assim:

const numInt3 = 10;
const numInt4 = parseInt('5.2');

console.log(numInt3 + numInt4); // Dará 15 e não 15.2, porque ele só pega a parte inteira

// Modo 2: Número real, decimal ou de ponto flutuante: parseFloat()

const numReal1 = 10;
const numReal2 = parseFloat('5.2');

console.log(numReal1 + numReal2); // Resultado 15.2

// Modo 3: Serve para qualquer número inteiro, real decimal ou ponto flutuante: Number()

const numm1 = 10;
const numm2 = Number('5.2');
const numm3 = 5;

console.log(numm1 + numm2); // Resultado: 15.2
console.log(numm1 + numm3); // Resultado 15