const peso1 = 1.0;//Mesmo com o 0 após o ponto, a variável continua sendo Inteiro
const peso2 = Number('2.0');//Com o Number o variável, mesmo estando em '' Aspas, ele continuar sendo um número


/*
console.log(peso1, peso2);
console.log(Number.isInteger(peso1))//Verifica se o valor é um valor Inteiro e retorna TRUE
console.log(Number.isInteger(peso2));*/

// Programa para verificar média usando peso em notas

const avaliacao1 = 6.46;
const avaliacao2 = 7.34;

const totalNota = avaliacao1 * peso1 + avaliacao2 * peso2;

const mediaFinal = totalNota / (peso1+peso2); 


console.log(mediaFinal.toFixed(2));//toFixed remove os números após o número ex: 4.5664 fica 4.56
console.log(mediaFinal.toString(2));//toString com o valor 2 dentro do parêntese transforma o valor média em valor Binário