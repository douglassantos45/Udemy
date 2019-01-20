// Usando comportamentos a partir do prototype
// Tenha cuidado ao tentar criar novos comportamentos

console.log(Array.prototype);
console.log(String.prototype);
console.log(Object.prototype);

String.prototype.reverse = function () {

	//Retornará a string - letras - em um array usando o split, reverte com o reverse e junto uma nova string com o join
	return this.split('').reverse().join('');
}

console.log('Revertendo essa String'.reverse());
console.log('Revertendo essa String'.reverse().toLowerCase());// Retornando com todas as letras minúsculas

Array.prototype.first = function () {

	return this[0];// Retornando o primeiro valor de um array
}

console.log([1, 2, 3, 4, 5].first());// Pegando o primeiro valor de um Array
console.log(['a', 'b', 'c'].first());// Pegando o primeiro valor de um Array


String.prototype.toString = function () {

	// Não substitua métodos que já estão disponíveis. Como o toString
	return 'Lascou tudo. Nunca use atributos existente!';
}

console.log('Tente modificar'.reverse());