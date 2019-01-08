//Percorrendo elementos de um Array

const notas = [ 7.6, 6.7, 3.0, 4.2 ];
console.log(notas);

for ( let x in notas ) {

	console.log();
	console.log(`Indice ${x}, valor(es) ${notas[x]}`);
}



//Percorrendo (pegando) elementos de um Objeto

const pessoas = {
	nome: 'Ana',
	sobrenome: 'Fernandes',
	idade: 23,
	endereco: 'Rua Pamenedes',
	numero: 22
}

//Listando os atributos do Objeto pessoas, é uma melhor forma para percorrer objetos, para array não é interessante
for ( let atributos in pessoas ) {

	console.log();
	console.log(`${atributos} = ${pessoas[atributos]}`);
}
