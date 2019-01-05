//usando For com VAR

//Sintaxe do for
for (var i = 0; i < 10; i++ ) {
    console.log(i);
    //imprimindo valor de i
}

//imprimindo valor de ir depois do for para varificar se a var mesmo dentro de um bloco for fica visível para o escopo global, e no caso, ele fica

console.log('i =', i);//O valor após o for é sempre o valor falseável, ou seja, o último valor que fez o for parar, no caso o 10


//=============
//  Exemmplo
//=============

const funcs = [];

for ( var i = 0; i < 10; i++ ) {
    //push adiciona valores a função, ou seja estou atribuido valores ao Array funcs
    funcs.push( function ( ) {
        console.log( i );
    })
}

//Como estamos atribuindo o i a uma VAR, o valor fora do escopo(bloco) do for, é o último valor que o fez sair do proprio for, ou seja, 10
funcs[2]();
funcs[8]();
