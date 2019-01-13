const Carro = function ( velocidadeMaxima = 200, delta = 5 ) {

	let velocidadeAtual = 0;

	//Método Publico
	//This responsável para tornar público, visível fora do escopo da função
	this.acelerar = function () {

		if (velocidadeAtual + delta <= velocidadeMaxima ) {

			velocidadeAtual += delta;

		} else {

			velocidadeAtual = velocidadeMaxima;
		}
	}

	// Método Puplico

	this.pegarVelocidadeAtual = function () {

		return velocidadeAtual;
	}

}

//Instânciando o Objeto Carro
const uno = new Carro;
uno.acelerar();//Faz o carro ativar a função this.acelerar

console.log(uno.pegarVelocidadeAtual());

//Instânciando o Objeto Carro
const ferrari = new Carro(340, 20);
ferrari.acelerar();//Faz o carro ativar a função this.acelerar
ferrari.acelerar();
console.log(ferrari.pegarVelocidadeAtual());

