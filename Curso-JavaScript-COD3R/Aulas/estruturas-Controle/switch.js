const imprimirResultado = function ( nota ) {

	//No Switch, o case teme qu ser um valor inteiro, não pode colocar, exemplo, 8.2, tem que ser inteiro 8
	switch ( Math.floor( nota )) {

		case 10:
		case 9:
			console.log('Medalha de Honra ' + nota);
			break;

		case 8:
		case 7:
			console.log('Aprovado ' + nota);
			break;

		case 6:
		case 5:
		case 4:
			console.log('Recuperação ' + nota);
			break;

		case 3:
		case 2:
		case 1:
		case 0:
			console.log('Reprovado ' + nota);
			break;

		default:
			console.log('Nota Inválida');
			break;

	}
}


//Chamando Função
imprimirResultado(10);
imprimirResultado(8);
imprimirResultado(6.5);//Com a função Math.floor, colocada na function, ele arredondará para 6, independe do valor ele arredondará para um inteiro
imprimirResultado(5);
imprimirResultado(3);