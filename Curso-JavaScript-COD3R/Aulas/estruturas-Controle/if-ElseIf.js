//Usando o this porque o mesmo, dentro de uma função, torna o próprio Objeto
Number.prototype.entreNotas = function ( inicio, fim ) {

	return this >= inicio && this <= fim;

}


//Criando um função para testar os valores(Notas)

const imprimirResultado = function ( nota ) {

	if ( nota.entreNotas( 9, 10 )) {

		console.log('Medalha de Honra ' + nota);

	} else if ( nota.entreNotas( 7, 8.99 )) {

		console.log('Aprovado ' + nota);

	} else if ( nota.entreNotas( 4, 6.99 )) {

		console.log('Recuperação ' + nota);

	} else if ( nota.entreNotas( 0, 3.99 )) {

		console.log('Reprovado ' + nota);

	} else {

		console.log('Nota Inválido');
	}

	console.log();
}

//Chamano função
imprimirResultado(10);
imprimirResultado(7.66);
imprimirResultado(6.99);
imprimirResultado(3.55);
imprimirResultado(-1);
imprimirResultado(11);