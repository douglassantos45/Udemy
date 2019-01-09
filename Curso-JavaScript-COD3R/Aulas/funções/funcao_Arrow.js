//==================================
// Declaração de função padrão
//==================================

function dobro( a ) {
	return 2 * a;
}
console.log(dobro(5));

//==================================
// Função do tipo Arrow ES2015
//==================================

dobro = ( a ) => {
	return 2 * a;
}
console.log(dobro(4));

//==================================
// Arrow mais simples

dobro = a => 2 * a; //Retorno implicito
console.log(dobro(Math.PI)); //Passando o valor de PI, para ser multiplicado pelo 2


//==================================
// Padrão

let ola = function () {
	return 'Olá';
}
console.log(ola());


//==================================
//Funções Arrow muito mais reduzida
//==================================


ola = () => 'Olá de novo'; // Retorno implicito
console.log(ola());

ola = _ => 'Olá mais uma vez :('; // Retorno implicito
console.log(ola());


//==================================
// Arrow ao invés do Bind
//==================================


function Pessoa () {

	this.data = 0;

	setInterval( () => {

		this.data++;
		console.log(this.data);

	}, 1000);
}

new Pessoa;


