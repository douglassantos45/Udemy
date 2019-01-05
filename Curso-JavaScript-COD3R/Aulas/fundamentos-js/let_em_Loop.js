//usando função em LET
/*
for ( let i = 0; i < 10; i++ ) {
    console.log(i);
    //Com o let, a variável i fica só no bloco do for e não no escopo global como o VAR
}
*/
//console.log('i =', i);//Diferente do var o LET não fica disponível fora do for, então dará erro


//============
//  Exemplo
//============

const funcs = [];

for ( let i = 0; i < 10; i++ ) {
    //push adiciona valores a função, ou seja estou atribuido valores ao Array funcs
    funcs.push( function ( ) {
        console.log(i);//Imprimir o valores
    })
}

//Diferente do que ocorre com o VAR, o LET imprimir os respectivos valores atribuidos com o push, ou seja, 2 e 8
funcs[2]();
funcs[8]();