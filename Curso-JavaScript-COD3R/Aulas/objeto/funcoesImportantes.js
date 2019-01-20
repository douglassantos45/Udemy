const pessoas = {
	nome: 'Rebeca',
	idade: 3,
	peso: 10
}

console.log(pessoas);
console.log(Object.keys(pessoas));//Pega a chave de pessoas
console.log(Object.values(pessoas));//Pega o valor de pessoas
console.log(Object.entries(pessoas));//Retorna um Array com os Subarrays chave/valor

//Com forEach
Object.entries( pessoas ).forEach( evento => {
	console.log(`${ evento[0] }: ${ evento[1] }`);
})

console.log();

//Com forEach com chave e valor com Destructuring
Object.entries( pessoas ).forEach(([chave, valor]) => {
	console.log(`${chave}: ${valor}`);
})

//Informando Objeto pessoas e atribuindo o nome da propriedade dataNascimento e criando um Objeto
Object.defineProperty(pessoas, 'dataNascimento', {
	enumerable: true, //Se dataNascimente vai ser exibido no array pessoas
	writable: false, //Se dataNascimento pode ser modificada
	value: '01/08/2018' //Valor atribuido para dataNascimento
})

pessoas.dataNascimento = '02/02/2016'; //Tentando mudar a variável, mas writable não permitirá
console.log(pessoas);

console.log();
console.log('A data Não alterou: ' + pessoas.dataNascimento);
