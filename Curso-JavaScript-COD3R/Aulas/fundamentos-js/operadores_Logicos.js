function compras ( trabalho1, trabalho2 ) {
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    //const comprarTv32 = !!( trabalho1 ^ trabalho2 ); //Convertendo para bulian Bitwise ^ é o xor
    const comprarTv32 = trabalho1 != trabalho2;
    const manterSaude = !comprarSorvete;// Operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaude }; //Criando um objeto para repassar o valores, esse método é novo no JS, criar objeto sem passar a chave ex:
    /*return { comprarSorvete:comprarSorvete,
     comprarTv50:comprarTv50,
    comprarTv32:comprarTv32,
    manterSaude:manterSaude };
    
    Aqui fica redundante, no outro caso a propria linguagem atribui a chave e valor */

}

//Comparando os valores 

console.log('01)');
console.log(compras( true, true ));
console.log('02)');
console.log(compras( true, false ));
console.log('03)');
console.log(compras( false, true ));
console.log('04)');
console.log(compras( false, false ));

