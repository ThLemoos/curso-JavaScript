// Operadores Lógicos
// São utilizados para checarem mais de uma comparação

// Operador Lógico && (AND):
// Nesse operador todas as expressões precisam ser verdadeiras para termos o retorno do valor true:

//Vamos supor que eu precise de duas condições para sair: ter dinheiro e estar sol na rua:

const expressaoAnd = true && true; // tenho dinheiro e está sol na rua, logo, nos retornará true
console.log(expressaoAnd); // Resultado: true

// Agora, se uma condição for falsa:

const expressaoAndFalse = true && false;
console.log(expressaoAndFalse); // Resultado: false, porque tenho dinheiro mas não está sol na rua

// Operador Lógico || (OR):
// Completamente diferente do operador && (AND)

/* Vamos supor que eu precise sair de casa se eu tiver dinheiro ou estiver sol. se eu tiver dinheiro e estiver chovendo eu saio do mesmo jeito
e se tiver sole  eu não tiver dinheiro eu saio do mesmo jeito também */

const expressaoOR = true || false;
console.log(expressaoOR); // Retornará true, porque não está sol mas tenho grana

// Se a expressão tiver muitos valores e apenas um deles for true, a expressão toda será considerada verdadeira (true):

const expressaoORMuitos = false || false || false || true || false || false || false || false || false || false;
console.log(expressaoORMuitos); // Resultado: true

console.log('========');

// Operador Lógico ! (NOT):
// Esse operador simplesmente inverte uma expressão veja:

console.log(!true); // Ele inverterá o valor de true para false
console.log(!false); // Ele inverterá o valor de false para true