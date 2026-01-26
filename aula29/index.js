// ARRAYS (BÁSICO)

// Array funciona como uma lista de coisas que queremos colocar dentro de uma variável. Veja uma lista de alunos:
// É uma boa prática de programação colocarmos sempre só um tipo de objeto dentro de um array:

//Índice:          0        1         2        3        4
const alunos = ['Thiago', 'Luiza', 'Antonio', 'Luiz', 'Laura']; // Um array é criado dentro de colchetes! // Array tipo string
const notas = [1, 9, 8, 10, 5]; // Array tipo number

// Os arrays são indexdados começando sempre no índice 0 como podemos ver no nosso array com variável "alunos" acima
// O índice no array é feito por elemento com podemos ver

// Acessando um elemento de um array:

console.log(alunos[4]); // Aqui estaremos acessando o elemento 'Laura' do nosso array que tem índice 4

// Editando um elemento no nosso array:

alunos[0] = 'Lemos'; // Nosso índice 0 que era 'Thiago' passará a se chamar 'Lemos' a partir de agora
console.log(alunos);

// Adicionando um elemente no nosso array

alunos[5] = 'Bruna'; // Nosso array que terminava no índice 4 agora terá um quinto índice que será 'Bruna' e tinha 5 elementos e agora passará a ter 6
console.log(alunos);

// Verificando o tamanho de um Array (length)

console.log(alunos.length); // Teremos o resultado de 6 no console, porque temos 6 elementos no nosso array. isso serve para se caso quisermos adicionar um elemento no array manualmente

// Adicionando elementos no final do nosso array com length:

const alunos2 = ['Lemos', 'Mauro', 'Mônica']; // Nosso array inicial com 3 elementos e do índice 0 ao 2

// Adicionando dois elementos, respectivamente, ao final do array 
alunos2[alunos2.length] = 'João';
alunos2[alunos2.length] = 'Fernanda';

console.log(alunos2); // Nosso array com 5 elementos do índice 0 ao 4, porque foram adicnionados os dois elementos acima

// Adicionando elementos no final do nosso array com push

const alunos3 = ['aluno1', 'aluno2', 'aluno3'];

console.log(alunos3); // Array com 3 elementos com índices do 0 ao 2

alunos3.push('aluno4');
alunos3.push('aluno5');

console.log(alunos3); // Array agora com 5 elementos com índice do 0 ao 4;

// Adicionando um elemento no início do nosso array com unshift:

alunos3.unshift('alunoNovo'); // Esse elemento passará a ser o índice 0 e mudará todo o resto

console.log(alunos3);

// Removendo elementos no final do nosso array com pop

alunos3.pop();
console.log(alunos3); // Remosverá o último índice, que nesta variável é o 'aluno5'

// Salvando a remoção de um elemento com pop dentro de uma variável

const alunos4 = ['Pedro', 'Thiago', 'João'];
const removido = alunos4.pop();

console.log(removido); // João
console.log(alunos4); // ['Pedro', 'Thiago']

// Removendo um elemento no início do nosso array com shift

const alunos5 = ['José', 'Leandro', 'Lúcia'];
const removido2 = alunos5.shift();

console.log(removido2); // José
console.log(alunos5); // ['Leandro', 'Lúcia']

// Apagando um índice no array:

const indices = ['índice0', 'índice1', 'índice2', 'índice3', 'índice4'];

console.log(indices);

delete indices[2]; // Ficará um valor vazio no índice removido: <1 empty item> e o índice nao existirá mais, retornando undefined no console

console.log(indices);
console.log(indices[2]); // undefined

// Fatiando um array com slice

const fatiando = ['THIAGO', 'LUIZA', 'ANTONIO', 'LUIZ', 'LAURA', 'BRUNA'];

// Queremos pegar os elementos do 0 ao elemento 3:

console.log(fatiando.slice(0, 4)); /* Se queremos pegar do índice 0 ao 3 sempre colocaremos no final do intervalo do slice o nosso índice final acrescentado de mais um
                                        porque o índice 4 não aparecerá e assim sucessivamente */

// Fatiando com negativos:

console.log(fatiando);
console.log(fatiando.slice(0, -1)); // Removerá o valor negativo do final do nosso array. Aqui removeremos um elemento, se fosse -2 removeríamos 2 elementos e assim por diante
// Ele pega o tamanho total do array e diminui pelo intervalo negativo que escolhermos no slice
console.log(fatiando.slice(0, -2));