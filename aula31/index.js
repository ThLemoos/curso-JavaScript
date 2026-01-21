// Funções em JavaScript

// Criando uma função: usamos a palavra function
// Vamos criar uma função que fale oi e poderia ser feita assim:

function saudacao() {

}

/*
    * A palavra function inicia a função
    * A palavra saudacao neste exemplo é um nome que demos para a nossa função
    * E sempre após a nossa palavra escolhida como "variável" abrimos e fechamos parêntesis
    * E por fim abrimos e fechamos chaves que é considerado o corpo da função
    * Tudo o que está dentro do corpo da função pertence só a ela, fazendo com que tudo do lado de fora não consiga acessá-la
    de qualquer forma
    * Neste formato não usamos ponto e vírgula após o fechamento das chaves
    * Dentro dos parêntesis a função poderia ter valores, inputs etc...
 */

// Declarando e chamando uma função:

function saudacao2() {
    console.log('Bom dia, quarta-feira chuvosa!'); // Dentro da nossa função podemos colocar quantas linhas de código quiermos
}

saudacao2(); // Aqui estamos chamando a função que criamos e tudo o que tiver dentro dela e for executável funcionará

// PARÃMETROS EM UMA FUNÇÃO
// Quero agora criar uma função para desejar bom dia para um nome específico. Faremos assim:

function saudacao3(nome) {
    console.log(`Bom dia, ${nome}`);
}

saudacao3('Thiago');

// A palavra "nome" é o nosso parâmetro da função
// A palavra 'Thiago' é o nosso argumento
/* 
Acontece o seguinte:
O nosso parâmetro ficará setado dentro do parêntesis da função e quando declararmos o nosso argumento
o motor do JS salva ele dentro do parâmetro e envia para o nosso corpo da função se estivermos o chamando lá.
E neste exemplo chamamos o nosso parãmetro pela Templat Strings ${nome}
*/
// Podemos usar mais de um argumento para dentro do nosso parâmetro. Veja:

saudacao3('Fernanda');
saudacao3('Luiza');
saudacao3('Antonio');

// Ao executarmos, teremos 4 mensdagens de bom dia para 4 pessoas diferentes

// Salvando a função dentro de uma variável:
// Podemos salvar uma funçãod entro de uma variável e depois chamar a variável que contém a função:

function saudacao4(nome) {
    console.log(`Bom dia, ${nome}`);
}

const variavel = saudacao4('Thiago');

console.log(variavel);

// Essa função ela não retorna nenhum valor, apenas mostrará o que tem dentro da função, que é um texto, mas retornará
// valor undefined
// Para retornarmos uma função com valor, faremos assim:

// RETURN

function saudacao5(nome) {
    return `Bom dia, ${nome}`;
}

const variavel2 = saudacao5('Thiago Lemos');

console.log(variavel2);

// Usando função para somar núnmeros

function soma(x, y) {
    const resultado = x + y
    return resultado; // Quando declaramos return tudo o que vem abaixo o JS não lê. A função para aqui
    console.log("isso não aparecerá");
}

console.log(soma(2, 3)); // Irá somar 2+3, o nosso 2 vai para x e nosso 3 vai para y

// Podemos pré-definir um valor para x e um valor para y também para se caso nao tenha nenhum numero na hora de chamarmos nossa função
// automaticamente o motor do JS irá somar os valores pré-definidos:

function soma2(x = 1, y = 2) {
    const resultado2 = x + y
    return resultado2;
}

// Se fizermos assim:

console.log(soma2(3)); // Irá dar 5, pois 3 irá para o valor de x e somará com o valor pré-definido de y que é 2
console.log(soma2(7, 3)); // Dará 10, porque irá usar esses valores que colocamos e não os pré-definidos

