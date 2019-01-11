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

//CallbackErro
var id = undefined;

exibirArtigo(id, callbackSuccess, callbackErro);

console.log();

//CallbackSuccess
var id = 1;

exibirArtigo(id, callbackSuccess, callbackErro);