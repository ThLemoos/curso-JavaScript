// Operação curto-circuito
// Tudo em JavaScript pode ser avaliado em verdadeiro ou falso
/*
VALORES QUE SÃO CONSIDERADOS FALSOS (QUANDO NECESSÁRIO) EM JAVASCRIPT:
false - valor literal de falso
0
Strings vazias: '' "" ``
null
undefined
NaN - Not a Number
*/

// Exemplos com && (AND):

const expressao = 'Thiago' && 0 && 'Lemos';
console.log(expressao); /* Será nos retornado o valor de 0, porque a avaliação de curto circuito lê a expressão da esquerda para a direita
e como o valor 0 é falso e para o operador lógico && as expressões têm que ser toda verdadeira para nos retornar o true, teremos o valor 0
mostrado no terminal quando executado, e tudo o que vem após o valor falso a operação curto-circuito não lê */

// Quando a expressão é toda verdadeira o JS nos retornará o último valor:

const expressao2 = 'Thiago' && 'Lemos' && 'Ferreira';
console.log(expressao2);

// Exemplos com || (OR):

const expressao3 = false || 0 || NaN || 'Thiago' || true;
console.log(expressao3); // O resultado será a primeira expressão verdadeira achada pela operação de curto-circuito que é Thiago.
                        //  O resto ela ignora msm sendo verdadeiro.

const expressao4 = false || NaN || 0 || null || undefined;
console.log(expressao4); // Quando tudo for falso, ela nos retornará o último valor, que aqui é undefined.

/*
Agora, vamos dizer que criamos um site em que o usuário possa escolher a or de fundo.
Podemos setar uma cor, a qual o usuário escolher, em uma variável e podemos usar o operador lógico || para fazer a escolha da cor
se caso o usuário escolher uma ou se caso mantenha a cor setada por nós ao criarmos o site. veja:
*/

const corUsuario = null; // null para quando o usuário escolher uma cor ela vier pra essa variável
const corPadrao = corUsuario || 'preto';
console.log(corPadrao); // nos retornará preto, porque é como se o usuário não tivesse escolhido a cor

// Agora se ele escolhesse uma cor:

const corUsuario1 = 'vermelho';
const corPadrao1 = corUsuario1 || 'preto';
console.log(corPadrao1); // aqui será retornado o valor vermelho, porque é como se o usuário tivesse esolhido uma cor, sendo considerada como
                        // true a expressão