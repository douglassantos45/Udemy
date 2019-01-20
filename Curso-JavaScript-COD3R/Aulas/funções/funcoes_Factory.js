// Funções Factory são funções que retornam um objeto
// Factory Simples

function criarPessoas () {

	//Retorna um Objeto
	return {
		nome: 'Douglas',
		sobrenome: 'Tott'
	}
}

console.log(criarPessoas());


// Sem valores fixos

function criarPessoas2 (nome, sobrenome) {

	//Retorna um Objeto, que pode ou não ter um nome
	return prod1 = {
		nome: nome,
		sobrenome: sobrenome
	}
}

console.log(criarPessoas2('Douglas', 'José'));