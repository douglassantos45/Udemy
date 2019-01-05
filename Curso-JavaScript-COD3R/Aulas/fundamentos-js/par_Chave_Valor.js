// Par Nome(ou Chave)/Valor

const saudacao = 'E aí'; // Contexto léxico 1 (onde foi definida ex: dentro de um função, fora de uma função, dentro de um objeto etc.)

function mostrar ( saudacao ) {
    saudacao = 'Opa!!'; //Contexo léxico 2
    return saudacao;
}


//Objetos são grupos aninhados de Par Nome(ou chave)/Valor
const cliente = { //Objeto
    nome: 'Jose Carlos',
    idade: 56,
    peso: 78,
    genero: 'Masculino',
    endereco: { //Objeto dentro de outro objeto
        logradouro: 'Rua Dolores das Dores',
        numero: 234
    }
}

console.log(saudacao);
console.log(mostrar());
console.log(cliente);


