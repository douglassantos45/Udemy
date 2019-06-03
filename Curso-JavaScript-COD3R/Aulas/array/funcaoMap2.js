//Criando o prório Map
Array.prototype.map2 = function(callback) {
    //criando um novo array
    const newArray = [];//Recebendo os valores do retorno

    //Criando a lógica
    for ( let i = 0; i < this.length; i++ ) {

        //Passando os valores para callback e da callback para o newArray
        newArray.push(callback(this[i], i, this));
    }
    //Retornando o resultado do for
    return newArray;

}

const carrinho = [
	'{"nome": "Borracha", "preco": 4.34}',
	'{"nome": "Lápis", "preco": 2.34}',
	'{"nome": "Mochila", "preco": 24.34}'
]

//Funções Arrow
const converterTextoObjeto = json => JSON.parse(json); //Convertendo o JSON para Objeto
const retornaPreco = produto => produto.preco; //Retornando o preço pelo .preco

//Passando o Map criado 
const resultado = carrinho.map2(converterTextoObjeto).map2(retornaPreco);

console.log(resultado);