const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for ( x in array ) {

	if ( x == 5 ) break; //Estamos Parando a execução do FOR, não do IF, o Break só age por cima do For, Switch, While e Do While. Ele age só em estrutura de repetições
	console.log(`${x} = ${array[x]}`);
}

console.log();

for ( y in array ) {

	if ( y == 5 ) continue;//Mesma coisa do Break, ele não age diretamente no IF, mas no For. Aqui o IF verifica se o y é igual a 5, se for ele CONTINUA a execução, até chegar ao final do Array
	console.log(`${y} = ${array[y]}`);
}


//For com rótulo
externo: for ( a in array ) {

	for ( b in array ) {

		if ( a == 2 && b == 3) break externo; //Esse break, ao invés de para no for (b in array), ele vai parar a execução do for externo, ou seja, vai para todo o bloco
		console.log(`Par = ${a}, ${b}`);
	}

}