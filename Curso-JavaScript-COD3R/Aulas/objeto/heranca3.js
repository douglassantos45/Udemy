// Prototype Pai
const pai = {
	nome: 'Joãozinho',
	corCabelo: 'Preto'
}

// Prototype filha1 herdando o prototype Pai
const filha1= Object.create(pai);
filha1.nome = 'Ana'; //Atribuindo valor nome

console.log(filha1);

// Prototype filha2 herdando o prototype Pai com alguns atributos próprios
const filha2 = Object.create( pai, {

	nome: { value: 'Bia', writable: false, enumerable: true }
});

filha2.nome = 'Joãozinho'; //Não será atribuido por conta do writable está ativado, impossibilitando de ser alterado. Se a propriedade estivesse em True, poderia  ser alterado
console.log(filha2);

console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

console.log();

for ( const chave in filha2 ) {

	console.log(chave); // Exibirá todos os atributos, até os herdados
}

console.log();

for ( let key in filha2) {

	filha2.hasOwnProperty(key) ? /* hasOwnProperty - Verificando se o filha2 tem propriedade própria*/
	console.log(`Propriedade própria: ${key}`) : console.log(`Por herança: ${key}`); // Se não, ele exibirá por Herança
}
