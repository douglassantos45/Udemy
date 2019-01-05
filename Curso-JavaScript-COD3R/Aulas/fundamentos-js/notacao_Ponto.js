console.log(Math.ceil(6.1))//Arredondar para cima

const obj1 = { }

obj1.nome = 'Bola';

// obj1['nome']  = 'Bola2'; // Também pode ser atribuída desse jeito
console.log(obj1.nome);

function Obj( nome ) {
	//this (dês) deixa uma variável de um objeto ou função pública
	this.nome = nome; 
	this.execute = function ( ) {
		console.log('Testando a Execução');
	}
}

const obj2 = new Obj ('Cadeira'); //passando um valor para não da undifined
const obj3 = new Obj ('Mesa');
//Mesmo os obj2  e 3, estarem instanciado o mesmo objeto, a instância é diferente e gera valores diferentes;

console.log(obj2.nome);
console.log(obj3.nome);
obj3.execute() // Chamando a função execute