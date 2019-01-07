const pegarValoresAleatorios = function ( min, max ) {

	const valor = Math.random() * ( max - min ) + min;
	return Math.floor(valor); //Retornando valor arredondado para baixo
}

let opcao = 0;

//Verificando se opcao é diferente de -1
while ( opcao != -1 ) {

	opcao = pegarValoresAleatorios(-1, 10); //A função pegarVarlor... vai repassar o valor para a opcao e o while vai verificar a opcao
	console.log(`Valores sorteados ${opcao}`);
	console.log();

}

console.log('Até a próxima');
console.log();

let contador = 1;

while (contador <= 10) {
	console.log(`Contador = ${contador}`);
	contador++;
}

console.log();

// Do while

console.log('-=-=-=-=-=-=-=-=-=-=-=-=');
console.log('Do While');
console.log('-=-=-=-=-=-=-=-=-=-=-=-=');
console.log()

const pegarValoresAleatorios2 = function ( min, max ) {

	const valor = Math.random() * ( max - min ) + min;
	return Math.floor(valor); //Retornando valor arredondado para baixo
}

let opcao2 = 0;

//Verificando se opcao é diferente de -1
do {

	opcao2 = pegarValoresAleatorios2(-1, 10); //A função pegarVarlor... vai repassar o valor para a opcao e o while vai verificar a opcao
	console.log(`Valores sorteados ${opcao2}`);
	console.log();

}while ( opcao2 != -1 ) 

console.log('Até a próxima');