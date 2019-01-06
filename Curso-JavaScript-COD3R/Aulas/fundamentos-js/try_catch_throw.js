
//Criando Função de Tratamento de Erro
function tratarErro (erro) {
	//throw new Error ("Tratando Erro");
	//throw 10;
	//throw 'Tratando Erro';
	/*throw {
		nome: erro.name,
		msg: erro.mensagem,
		data: new Data //Criando uma nova instância de data
	}*/
	throw 'Ocorreu um Erro'; //Lança um Erro
}


function nomeGritar () {
	try {

		//Mostrando um objeto nome
		console.log(obj.name.uppercase() + '!!!');

	} catch ( e ) {// O e é para receber um valor de parâmetro, que seria o retorno da função de Tratar erro

		//Chamando a Função de Erro
		tratarErro( e );
	}
}

// Colocando o nome diferente do da função nomeGritar que é name, para ocorrer o erro
const obj  = { nome:'Roberto' };

//Chamando função
nomeGritar();