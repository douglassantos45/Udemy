// Função em JS é First-Class Object (Citizens)
//  Higher-order function

// Criando de forma Literal, funções sem retorno, retorna undefined

function fun1 () {

}

console.log(fun1());


// Armazenando em uma variável, funções sem retorno, retorna undefined

const fun2 = function () {

}

console.log(fun2());


// Armazenando em um Array

const array = [ function (a, b) { return a + b}, fun1(), fun2()];

//Chamando a função
console.log(array[0](2, 3));
console.log(array[1]);
console.log(array[2]);


// Armazenando em um atributo de objeto

const obj = {}

obj.falar = function () {
	return 'Opa'
}

console.log(obj.falar());


// Passar função como parâmetro para outro função

function executar (funcao) {

	funcao(); //Aqui que vai executar a função executar
}

executar(function () {

	console.log('Executando')
})


// Função pode retornar/contém uma função

function soma (a, b) {

	return function (c) {
		console.log(a + b + c);
	}
}

//Chamando a função
soma(2, 3)(4);// 4 é o valor de c

// Outra forma de chamar a função, armazenando em uma variável
const outraForma = soma(2, 3);//Armazena o valor de A e B
outraForma(4); //Chama a função soma passando o valor de C