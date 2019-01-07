function boaNoticia (nota) {//Passando nota como parâmetro para receber um valor
	if ( nota >= 7 ) {
		console.log('Aprovado com ' + nota);
	} else {
		console.log('Reprovado com ' + nota);
	}
}

//chamando a função

boaNoticia(8);

console.log();


//Testando se For Verdadeiro o valor que está no IF
//
function seForVerdade (valor) {
	if (valor) {
		console.log('É verdade... ' + valor);
	} else {
		console.log('É falso...' + valor);
	}
}

seForVerdade(0); //O zero é o único número que é um valor falso
seForVerdade(''); //String sem contéudo é um valor falso
seForVerdade(); //Sem Valor é falso(undefined)
seForVerdade(null); //Null
seForVerdade(undefined); //Undefined
seForVerdade(' '); //String com ESPAÇOS é verdadeiro
seForVerdade(7); //Qualquer número que NÃO seja o ZERO é verdadeiro
seForVerdade([2, 7]); //Arrays com valores são verdadeiros
seForVerdade([ ,7]); //Array só com um valor, emitindo o outro, é verdadeiro
seForVerdade([ ]); //Array vazio é verdade
seForVerdade(['valor']); //Array com String é verdadeiro
seForVerdade({}); //É verdade, é um Objeto

console.log();
//Outros métodos de IF

function teste1 (nota) {
	if (nota > 7)//No JS, pode usar o IF sem chaves = {}, mas apenas uma sentênça executará
		console.log('Sua nota ' + nota); //Essa setênça executará
		console.log('Testando se esse console também está associoado ao IF');//Esse NÃO, ele executará junto ao IF, mas não pertence a ele
}

teste1(8);


console.log();

//Não use IF com ponto e vírgula igual a o exemplo
function teste2 (nota) {

	if (nota > 7); //Sentênça de código com o final tem ponto e vírgula, ele não executa o resto
		console.log('Sua nota ' + nota);//Essa setênça não pertece ao IF
}

teste2(7);
teste2(8);

console.log();

//Criando um constante recebendo um função que recebe como parâmetro a nota
const imprimirNota = function (nota) {

	if ( nota >= 7 ) {

		console.log('Aprovado com ' + nota);

	} else {

		console.log('Reprovado com ' + nota);
	}
}

imprimirNota(7);
imprimirNota(6);
imprimirNota('Epa'); //Cuidado para que isso não ocorra. Com linguagens com tipagem fraca, ele permitirá que a String passe e vá direto para o ELSE