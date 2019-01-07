for ( let i = 1; i < 10; i++ ) {

	console.log(`Contador = ${i}`);

}

console.log();

for ( var i = 1; i <= 10; i++ ) {

	console.log(`Contador = ${i}`);

}

console.log();
console.log('Com Array');
console.log();

notas = [6.9, 7.2, 10, 3.4];

//I começa a partir 0, i vai até o tamanho do Array e acrescente uma unidade ao valor de i
for (let i = 0; i < notas.length; i++) { //length (comprimento)

	//console.log(`Notas = ${i}`);// Se for assim ele imprimirá as posições do Array, ou seja, o tamanho do Array
	console.log(`Notas = ${notas[i]}`);

}