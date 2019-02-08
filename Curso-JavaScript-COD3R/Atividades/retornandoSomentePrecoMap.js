
const carrinho = [
	'{"nome": "Borracha", "preco": 4.34}',
	'{"nome": "Lápis", "preco": 2.34}',
	'{"nome": "Mochila", "preco": 24.34}'
]

const converterTextoObjeto = json => JSON.parse(json); //Convertendo o JSON para Objeto
const retornaPreco = produto => produto.preco; //Retornando o preço pelo .preco

const resultado = carrinho.map(converterTextoObjeto).map(retornaPreco);

console.log(resultado);