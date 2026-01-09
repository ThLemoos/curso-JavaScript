/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg 
tem 1.8 de altura e seu IMC é de 25.925925925925925924
Luiz Otávio nasceu em 1980
*/


const nome = 'Thiago';
const sobrenome ='de Lemos Ferreira';
const idade = 30;
const peso = 107;
const altura = 1.93;
let imc;
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2026 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log('tem', altura, 'de altura e seu IMC é de', imc);
console.log(nome, sobrenome, 'nasceu em', anoNascimento);

console.log('============================================================')

// Podemos fazer com template strings, que é uma string que podemos colocar variáveis nela
// Colocaremos todo o texto dentro de crases, e as variáveis e constantes serão demonstradas com um $ na frente de chaves {} e com o indicador da variável dentro. Ex ${nome}

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem altura de ${altura} e seu IMC é de ${imc}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`);



