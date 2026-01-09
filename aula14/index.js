const nome = 'Thiago';
console.log(nome);

// Não podemos declarar uma constante sem inicializar ela como a forma abaixo:
// const oi;

// Podemos pegar o valor de uma outra constante ou de uma variável e atribuir ao valor de uma outra constante ou variável:

const primeiroNumero = 5;
const segundoNumero = 10;
const terceiroNumero = '15';
const resultado = primeiroNumero * segundoNumero;
console.log(resultado);

// Podemos recriar mais uma variável pegando o valor das variáveis ou constantes que já temos:

const resultadoDuplicado = resultado * 2;
console.log(resultadoDuplicado);

// Com let podemos pegar um resultado e alterar por ele mesmo. Fazendo assim:

let resultadoTriplicado = resultado * 3;
console.log(resultadoTriplicado);

// Agora podemos pegar o próprio valor de resultado triplicado e somar algo em cima dele com let, porque let aceita adicionar valores dentro :

resultadoTriplicado = resultadoTriplicado + 5
console.log(resultadoTriplicado);

// Agora o valor de resultado triplicado será sempre 155 e não 150, porque adicionamos isso no último código

// Podemos verificar o tipo de dados que está dentro de uma variável usando o typeof()

console.log(typeof(primeiroNumero));
console.log(typeof(primeiroNumero + terceiroNumero)); // Aqui será uma string, porque o sinal de + serve para somar números e concatenar (juntar) strings. e como o terceiroNumero está entre aspas, ele é unma string
console.log(typeof(primeiroNumero + segundoNumero)); // Aqui será number.