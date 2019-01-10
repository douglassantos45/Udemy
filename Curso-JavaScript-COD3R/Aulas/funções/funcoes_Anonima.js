//Função anônima é uma função sem nome
const soma = function (x, y) {
	return x + y;
}

//Atribuindo a função soma para o parâmetro operacao
const imprimirResultado = function (a, b, operacao = soma ) {
	console.log(operacao(a, b));
}

imprimirResultado(3, 4);//Mesmo sem o terceiro valor ele asume o valor padrão da operacao
imprimirResultado(3, 4, soma);

//Passando uma função anônima como parâmetro
imprimirResultado(3, 4, function (x, y) {
	return x - y;
})

//Passando uma Arrow function como parâmetro
imprimirResultado(3, 4, (x, y) => x * y);


//Função anônima em objetos
const pessoa = {

	falar: function () {

		console.log('Falar');
	}
}

pessoa.falar();