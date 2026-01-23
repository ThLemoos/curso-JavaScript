// Estruturas condicionais: if, else if e else
// Serve para desviarmos o fluxo da aplicação quando necessário
// Vamos imaginar que criamos um sistema que deseje bom dia para o usuário pela manhã, entre as 0h e 11h00. Ficaria assim:

const hora = 10; // Existe um objeto pra hora, usamos desse jeito só pra exemplificar

if(hora < 12) {
    console.log('Bom dia!'); // Como a nossa constante de hora vale 10, a mensagem será executada
}

// Agora, se quiséssemos que fosse de 0h até 11h59. Ficaria assim:

const hora2 = 11;

if(hora2 <= 11) {
    console.log('Bom dia!!'); // Colocamos o operador de comparação menor ou igual, porque incluirá tudo o que for menor que "11h" e também igual a "11h" e "11h59"
}

// Vamos supor aqora que criamos um sistema um pouco mais avançado, em que:
/*
De 0h até 11h - mande Bom dia
De 12h até 17h - mande Boa tarde
De 18h até 23h - mande Boa noite

Faremos assim:
*/

const hora3 = 50;

if(hora3 >= 0 && hora3 <= 11) {
    console.log('Bom dia!!!');
} else if (hora3 >= 12 && hora3 <= 17) {
    console.log('Boa tarde!!!');
} else if (hora3 >=18 && hora3 <=23) {
    console.log('Boa noite!!!');
} else {
    console.log('Um ótimo dia pra você');
}

/* Leitura do bloco: 
Se a nossa variável hora3 for maior ou igual a 0h e hora3 for menor ou igual a 11h mande Bom dia para o nosso usuário
Se não se (o código if de cima não funcionando), hora3 for maior ou igual a 12h e hora3 for menor ou igual a 17h mande Boa tarde para o nosso usuário
Se não se, hora3 for maior ou igual a 18h e hora3 for menor ou igual a 23h mande Boa noite para o nosso usuário
Senão, se nenhuma das afirmações acima forem verdadeiras, execute este último código e envie a mensagem "Um ótimo dia pra você" para o nosso usuário
*/

/*
Algumas observações:

if pode ser usado sozinho
sepre que utilizo else if e else preciso de um if antes
podemos ter vários else ifs na checagem
só podemos ter um else na checagem
podemos utilizar condições sem else if, utilizando apenas if e else
 */

// Exemplo de utilização somente de if e else sem else if
// Vamos supor que eu saia de casa somente se tiver grana

const tenhoGrana = true;

if (tenhoGrana) {
    console.log('Vou sair de casa');
} else {
    console.log('Não vou sair de casa');
}

// Como tenhoGrana é true, o código mandará a mensagem "vou sair de casa" no console
// Se tenhoGrana fosse um valor falso, a mensagem a ser enviada seria "não vou sair de casa"
