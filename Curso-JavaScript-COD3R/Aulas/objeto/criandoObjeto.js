// Usando Notação Literal

const object = {}

console.log(object);
console.log();


// Object em JS

const object1 = new Object;

console.log(object1);
console.log();


//Funções Construtoras

function Produto ( nome, preco, desconto) {
	//deixando o nome publico para qualquer código alterado
	this.nome = nome;

	this.getPrecoDesconto = () => {

		return preco * (1 - desconto);
	}
}

produto1 = new Produto('Notebook', 2345, 0.15);
produto2 = new Produto('TV 50', 4532, 0.25);

console.log(produto1.getPrecoDesconto(), produto2.getPrecoDesconto());
console.log();
console.log();



//Função Factory

function criarFuncionario ( nome, salarioBase, faltas) {

	return {
		nome,
		salarioBase,
		faltas,
		getSalario () {
			//Retornando o valor do salario pelo quantidade de faltas
			return ( salarioBase / 30 ) * ( 30 - faltas );
		}
	}
}

funcionario1 = new criarFuncionario('Joãozinho', 3456, 12);
funcionario2 = new criarFuncionario('Marlene', 5614, 6);
console.log(funcionario1.getSalario(), funcionario2.getSalario());
console.log();



//Object.creat

const objeto = Object.create(null);
objeto.nome = 'Ana';
objeto.Sobrenome = 'Jose';

console.log(objeto)


//Verificando o tipo do Objeto com e se NEW

console.log();
console.log();
console.log(typeof(Object), typeof(new Object));



// Função que retorna Objeto

const fromJSON = JSON.parse('{"mensagem": "Eu sou um JSON"}');

console.log();
console.log();
console.log(fromJSON.mensagem);