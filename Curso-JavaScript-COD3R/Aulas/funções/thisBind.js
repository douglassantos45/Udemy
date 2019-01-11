const pessoa = {

	saudacao: 'Bom dia!',
	falar () {
		console.log(this.saudacao);
	}

}

pessoa.falar();
const falar = pessoa.falar // vai da confilito entre paradigmas: funcional e OO(Orientada a Objetos)
falar();


//Usando o bind
const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();


// Outro modo de usar o Bind

function Pessoas () {

	this.idade = 0;

	setInterval(function() {

		this.idade++;
		console.log(this.idade);

	}.bind(this)/*Para fazer referência do this, usa-se o bind*/, 1000); // Delay, é a demora na execusão, 1000 milisegundo que vale a 1s
}

new Pessoas;//instaciando a função - objeto Pessoas


//Usando um constante nominada Self para acessar o this

function Pessoas2 () {

	this.idade = 0;

	const self = this //Passando o this para uma constante self
	setInterval(function() {

		self.idade++;
		console.log(self.idade);

	}, 1000); // Delay, é a demora na execusão, 1000 milisegundo que vale a 1s
}

new Pessoas2;