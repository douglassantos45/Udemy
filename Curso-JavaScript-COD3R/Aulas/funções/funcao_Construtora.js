/*class Pessoa {

	constructor(nome) {

		//This para deixar nome como global(acessível a todos)
		this.nome = nome;
	}

	falar () {

		console.log(`Meu nome é ${this.nome}`);
	}
}

const pessoa1 = new Pessoa('Marcos');
pessoa1.falar(); */




// Tranformando Classe em Função Construtora


function Pessoa (nome) {

	//This para deixar nome como global(acessível a todos)
	this.nome = nome;

	//This para deixar falar globla ou pública, recebendo uma função anônima
	this.falar = function () {

		console.log(`Meu nome é ${this.nome}`);
	}
}

const pessoa1 = new Pessoa('Marcos');
pessoa1.falar();