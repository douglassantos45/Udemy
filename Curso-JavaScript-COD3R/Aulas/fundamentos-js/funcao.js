//Função sem Retorno

function semRetorno (a, b) {
    console.log(a + b);
}

semRetorno(2, 3); //Faz a soma
semRetorno(); //Imprimi undefined
semRetorno(3,5,6,7); //Pega somente os 2 primeiros números e ignora os outros
semRetorno(3); //Soma o 3 com undefined

//Função com Retorno

function comRetorno (a, b = 1) {
    return a + b;
}

console.log(comRetorno(2, 3));
console.log(comRetorno(2)); //Pega o valor não passado (undefined) verifica a função e passa 1 como o valor a ser somado
console.log(comRetorno()); //Sem passar o valor ele vai da NaN(not a number)


//========================================
//Armazenando Função em variável(costante)
//========================================



const imprimirSoma = function ( a , b ) {
    console.log( a + b );
}

//chamando função
imprimirSoma( 2, 3);


//========================================
//Armazenando função Arraw 
//========================================


const soma = ( a , b ) => {
    return a + b;
}

//Chamando Função
console.log(soma( 6 , 3 ));


//========================================
//Função com Retorno Implícito 
//========================================


const subtracao = ( a , b ) => a - b;
console.log(subtracao( 5 , 6 ));

//Mais simples com um único parâmetro

const imprimirString = a => console.log(a);
imprimirString('Mostrando String!!!!');