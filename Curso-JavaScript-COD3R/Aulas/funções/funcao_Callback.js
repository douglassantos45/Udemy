function exibirArtigo ( id, callbackSuccess, callbackErro ) {

	if ( id != null ) {

		callbackSuccess('Titulo', 'Descrição');

	} else {

		callbackErro('Ocorreu um Erro');
	}
}

var callbackSuccess = function (titulo, descricao) {
	console.log(titulo + " " + descricao);
}

var callbackErro = function ( erro ) {
	console.log( erro );
}

//Ativa o CallbackErro
var id = undefined;

exibirArtigo(id, callbackSuccess, callbackErro);

console.log();

//CallbackSuccess
var id = 1;

exibirArtigo(id, callbackSuccess, callbackErro);


//====================
//Função Sem Callback
//====================


const notas = [6.5, 7.2, 8.5, 4.6];

const notasBaixas1 = [];
//Percorrendo o Array notas
for ( let i in notas ) {

	if ( notas[i] < 7 ) {

		notasBaixas1.push(notas[i]);//Atribuindo o valor de notas em notasBaixas1
	}
}

console.log(notasBaixas1);



//Função Com Callback
//====================

// Filter Cria uma matriz preenchida com todos os elementos da matriz que passam em um teste(outra variável)
const notasBaixas2 = notas.filter(function ( nota ) {

	return nota < 7;

})

console.log(notasBaixas2);



//Função Callback com Arrow
//=========================


const notasBaixas3 = notas.filter(nota => nota < 7);
console.log(notasBaixas3);



//===========================
//Função Callback no Browser
//===========================


//Pegando uma Tag body do primeiro elemento do array e atribuindo a ela uma função a cada clique no body
/*
document.getElementsByTagName('body')[0].onclick = function ( evento ) {

	console.log('O Evento ocorreu!');
} */