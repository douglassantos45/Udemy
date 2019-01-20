// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis exeternas à função


// Contexto Léxico em ação

const x = 'Global';

function fora () {

	const x = 'Local';
	//Declarando função dentro(no escopo) da função fora
	function dentro () {

		return x;
	}

	return dentro;
}

//Passando a função que retorna outra função para uma variável
const minhaFuncao = fora();
console.log(minhaFuncao());