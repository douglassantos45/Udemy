class Pessoa {

	constructor(nome) {

		//This para deixar nome como global(acessível a todos)
		this.nome = nome;
	}

	falar () {

		console.log(`Meu nome é ${this.nome}`);
	}
}

const pessoa1 = new Pessoa(/*'Marcos'*/);
pessoa1.nome = 'Douglas';
pessoa1.falar();


//Factory

const Pessoa2 = nome => {

	return {
		//Retornando uma função arrow em um Objeto
		falar: () => console.log(`Meu nome é ${nome}`)
	}
}

const pessoa2 = Pessoa2('Marlos');
pessoa2.falar();