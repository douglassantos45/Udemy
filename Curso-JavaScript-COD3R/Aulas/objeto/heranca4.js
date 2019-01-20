function MeuObjeto () {}

console.log(MeuObjeto.prototype);

const obj1 = new MeuObjeto(); // Quando instacia um Objeto criado, ele apontará para o objeto criado. Não para o Object.prototype
const obj2 = new MeuObjeto();

console.log((obj2.__proto__ === obj1.__proto__));
console.log(MeuObjeto.prototype === obj1.__proto__);

console.log();

MeuObjeto.prototype.nome = 'Antônio';
MeuObjeto.prototype.falar = function () {

	//return `Olá, meu nome é, ${this.nome}`;
	console.log(`Olá, meu nome é, ${this.nome}`);
}

obj1.falar();
MeuObjeto.prototype.falar();

//console.log(obj1.falar()); //Se a o retorno for return
//console.log(MeuObjeto.prototype.falar()); // Se o retorno for return


const obj3 = {}// Instaciando com o Object.prototype
obj3.__proto__ = MeuObjeto.prototype; //Removendo o Índice Object.prototype para MeuObjeto

obj3.nome = 'Objeto 3';
obj3.falar();

console.log();

// Resumindo

console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype);
console.log(MeuObjeto.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);

