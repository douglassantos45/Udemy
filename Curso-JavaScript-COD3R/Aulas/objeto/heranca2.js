// Atribuindo valor para O Objeto do Prototype

Object.prototype.atributo0 = 'Objeto Globla - Não recomendado';

const avo = {
	atributo1: 'A - Avó'
}

const pai = {
	__proto__: avo, // Estabelecendo relaçaõ entre o avó
	atributo2: 'B - Pai'

}

const filho = {
	__proto__: pai, // Estabelecendo relaçaõ entre o pai
	atributo3: 'C - Filho'
}

console.log(avo.atributo2);
console.log(filho.atributo2);
console.log(pai.atributo1);
console.log(pai.atributo0);

console.log();


// Outro Exemplo

const carro = {
	velAtual: 0,
	velMax: 200,

	acelerarMais (delta /*delta é parâmetro que irei passar*/) {

		if (this.velAtual + delta <= this.velMax) {

			this.velAtual += delta; // Adiciona mais velocidade
		} else {

			this.velAtual = this.velMax;
		}
	},

	mostrarVelocidade () {

		return `Velocidade: ${this.velAtual}km/h de ${this.velMax}km/h`;
	}
}

const ferrari = {
	modelo: 'F400',
	velMax: 340 //Shadowing vai sobrescrever a velMax do Objeto Pai(carro), somente para esse prototype
}

const volvo = {
	modelo: 'A40',

	mostrarVelocidade () {
		return `${this.modelo}: ${super.mostrarVelocidade()}`; // Super para referênciar o protytpe volvo - parece o this que referência o Objeto atual. Então usa-se o Super para referênciar o prototypo atual (prototypo - Volvo) - para ele sobrescrever o valor do Objeto Pai(carro)
	}

}

// Atribuindo Herança para Ferrari
Object.setPrototypeOf(ferrari, carro); // Estabelecendo relaçaõ entre o carro, é a mesma coisa que utilizar __proto__
// Atribuindo Herança para volvo
Object.setPrototypeOf(volvo, carro); // Estabelecendo relaçaõ entre o carro, é a mesma coisa que utilizar __proto__

volvo.acelerarMais(200); //Passando Velocidade Atual e o Delta como parâmetro
ferrari.acelerarMais(320); // Passando Velocidade Atual e o Delta como parâmetro

console.log(volvo.mostrarVelocidade()); // Com alteração, função do próprio volvo
console.log(ferrari.mostrarVelocidade()); // Sem alteração, função do Objeto Pai ( carro )

console.log();

console.log(ferrari);
console.log(volvo);