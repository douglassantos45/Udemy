// Objeto é uma coleção dinâmica de pares Chave/Valor

//Instaciando produto
const produto = new Object;

//Adicionando valores

produto.nome = 'Cadeira';
produto['marca do produto'] = 'Generica';
produto.preco = 220;

console.log(produto);

//Deletando valores

delete produto.preco;
delete produto['marca do produto'];

console.log(produto);
console.log();
console.log();


// OO Notação literal

const carro = {

	modelo: 'A4',
	valor: 89931,

	//Objeto dentro do objeto carro
	proprietario: {
		nome: 'Jose Carlos',
		idade: 56,
		//Objeto dentro do objeto proriedade
		endereco: {
			logradouro: 'Rua ABC',
			numero: 23
		}
	},

	//Array dentro de Objeto Carro
	condutores: [
		{
			nome: 'Aninha Soarez',
			idade: 21
		} ,
		{
			nome: 'Paulo Fernandes',
			idade: 25
		}
	],

	calcularValorSeguro: function () {
		//... Código a ser executado
	}

}

//Método tradicional para acessar um valor
carro.proprietario.numero = 1000;

//Acessando por array
carro['proprietario']['endereco']['logradouro'] = 'Rua JBS';

console.log(carro);

delete carro.condutores;
delete carro.proprietario.endereco;

console.log(carro);

console.log(carro.condutores);// Retornará Undefined

console.log(carro.condutores.length); //Retornará um Erro se o valor condutores estiver deletado ou não existir