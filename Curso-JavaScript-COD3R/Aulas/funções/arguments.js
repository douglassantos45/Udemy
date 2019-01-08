function soma () {

	let soma = 0;

	for ( x in arguments ) {

		soma += arguments[x];
	}
	return soma;
}

console.log(soma(1));
console.log(soma(2.3, 3.1, 4.6)); // Vai somar todos os valores

console.log(soma(4, 6, 'Testando String')); // Vai exibir os valores numéricos e concatenar com a String
console.log(soma('a', 'b', 'c')); // Vai concatenar as Strings e colocar o zero, definido na função soma, na variável soma = 0