function pegarPreco (imposto = 0, moeda = 'R$') {

	return `${moeda} = ${this.preco * (1 - this.desconto) * (1 + imposto)}`;
}

//Criando um Objeto
const produto = {
	nome: 'Notebook',
	preco: 4532,
	desconto: 0.15,
	pegarPreco //Passando a Função
}

global.preco = 20;
global.desconto = 0.1;

console.log(pegarPreco());

console.log(produto.pegarPreco());

console.log(pegarPreco.call(produto, 0.1, '$'));
console.log(pegarPreco.apply(produto, [0.23, '$']));


//Chamando a função pelo Call & Apply

const carro = { preco: 49990, desconto: 0.20};

console.log(pegarPreco.call(carro));
console.log(pegarPreco.apply(carro));


// Chamando por parâmetro

console.log(pegarPreco.call(carro, 0.17, '$'));

//Diferença do Apply para o call, é os parênteses
console.log(pegarPreco.apply(carro, [0.13, '$']));