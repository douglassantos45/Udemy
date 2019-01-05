//=======================
//Imprimindo VAR em blocks
//=======================

{
    {
        {
            var imprimirForadoBloco = 'Será que imprimi?';
            console.log(imprimirForadoBloco); //Imprimindo dentro do escopo
        }
    }
}

//imprimindo fora do escopo do var
console.log(imprimirForadoBloco);

//.......................................

var numero = 1;

{
    {
        var numero = 2;
        console.log('Imprimindo dentro do bloco ', numero);
    }
}

// O valor 2 sobrescreve o valor 1 porque estamos utilizando a mesma variável
console.log('Imprimindo fora do bloco ', numero);

//.......................................


//=======================
//Imprimindo LET em blocks
//=======================

var numero = 1;

{
    let numero = 2;
    console.log('Imprimindo detro do bloco ', numero);
    //No caso do LET, ele fica visível só no bloco mesmo que os nomes das variáveis sejam iguais. Diferente do VAR
}

console.log('Imprimindo fora do block ', numero);


let a = 1;
{
    let a = 2;
    console.log(a);
    //Mesmo sendo LET com as mesmas variáveis, o escopo {} faz com que ele sejam "diferentes"
}

console.log(a);