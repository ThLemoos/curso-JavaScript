// Operadores de comparação

// maior que >
// Maerve para ver se o valor da esquerda é maior que o da direita em uma expressão:

const num1 = 10;
const num2 = 5;
const comp = num1 > num2; 
console.log(comp); // Retornará True, porque 10 é maior que 5

console.log('=====')

// menor que <
// Serve para ver se o valor da esquerda é menor que o valor da direita em uma expressão:

const num3 = 10;
const num4 = 5;
const comp2 = num4 < num3;
const comp3 = num3 < num4;
console.log(comp2); // Retornará True, porque 5 é menor que 10
console.log(comp3); // Retornará False, porque 10 não é menor que 5

console.log('=====')

// maior ou igual a >=
// Por mais que tenha duas comparações em um só operador, se o valor da esquerda obtver uma das informações do operados, toda a expressão será dada como True:

const num5 = 10;
const num6 = 2;
const comp4 = num5 >= num6;
console.log(comp4); // Retornará True, porque por mais que 10 não seja igual a 2 ele é maior que 2.

console.log('=====')

// igualdade == (NÃO UTILIZAREMOS ESSE!)

const n1 = 10;
const n2 = 10;
const comparacao = n1 == n2;
console.log(comparacao);

// Porque nao devemos utilizar o operador ==

const n3 = 10;
const n4 = '10';
const comparacao2 = n3 == n4;
console.log(comparacao2); // Aqui dará True, porque o operador == só ve o valor e não o tipo. Logo ele faz a transformação da string '10' para um número 10 que está dentro da sring, tornando a expressão verdadeira

console.log('=====')

//  Operador de igualdede estrita

const nm1 = 10;
const nm2 = 10;
const compEstrita = nm1 === nm2;
console.log(compEstrita); // Dará True porque 10 realmente é igual a 10. Agora veja o segundo exemplo:

const nm3 = 10;
const nm4 = '10';
const compEstrita2 = nm3 === nm4;
console.log(compEstrita2); // Aqui dará False porque o operar de igualdade estrita faz a comparação de valor e tipo. Por isso usaremos ELE!!!

console.log('=====')

// Operador de diferença estrita !==

const nm5 = 10;
const nm6 = 20;
const comparacao3 = num5 !== num6;
console.log(comparacao3); // Dará true porque 10 é diferente de 20 e o operador de diferença estrita também faz comparação de valor e tipo