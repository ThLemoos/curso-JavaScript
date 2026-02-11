// While e Do While
// Vamos supor que queremos usar uma função que gere um número aleatório entre 1 e 50

// While

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);

while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
} // Aqui irá gerar um número aleatório entre 1 e 50, fazendo com que o programa pare quando o valor for 10. Primeiro é executado a condição e depois o bloco de código dentro do while.
console.log('############');

// Do While

rand = 10;

while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}
console.log('############'); // Quando declaramos nossa variável rand como 10, o while irá verificar a condição, ver se o número é diferente de 10, se for 10, ele não executará nada

// Já o do... while irá executar o bloco pelo menos uma vez e depois checará a condição, se o número for !== 10 ele irá repetir o looping até chegar no 10

do {
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10);

