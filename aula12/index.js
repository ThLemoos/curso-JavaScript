console.log('João nasceu em 1984.');
console.log('Em 2000 João conheceu Maria.');
console.log('João casou-se com Maria em 2012.');
console.log('Maria teve 1 filho com João em 2015');
console.log('O filho de João se chama Eduardo');

console.log('===========================================');

// Para guardarmos o nome João que apreceu nos 5 console.log(), usaremos let, que é a forma de guardarmos uma variável em JavaScript. Ficará assim o código:

// Primeiro a Variável
let nome = 'João';

// Logo após a variável colocaremos o código com console.log() para aparecer as mensagens na tela do usuário. No lugar do nome "João", usaremos a variavel "nome" que tem o mesmo valor de João.

console.log(nome, 'nasceu em 1984.');
console.log('Em 2000', nome, 'conheceu Maria.');
console.log(nome, 'casou-se com Maria em 2012.');
console.log('Maria teve 1 filho com', nome, 'em 2015');
console.log('O filho de', nome, 'se chama Eduardo');

console.log('===========================================');

// Podemos declarar uma variável mas sem colocar valor nela. Assim:

let cliente;
cliente = 'Thiago Lemos';
console.log(cliente);

cliente = 'Antonio Silva'; // O identificador "cliente", agora terá valor de Antonio Silva e não Thiago lemos.
console.log(cliente); // Aqui o motor do JavaScript lerá o último valor definido para a variável "cliente".

