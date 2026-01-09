let varA = 'A'; // O valor de A tem que passar a ser B
let varB = 'B'; // O valor de B tem que passar a ser C
let varC = 'C'; // O valor de C tem que passar a ser A

const varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp;


console.log(varA, varB, varC);

// Essa é uma maneira antiga de se resolver, um modelo mais atual é utilizando arrays

