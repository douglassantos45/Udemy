function Aula (nome, videoID) {
	this.nome = nome;
	this.videoID = videoID;
}

const aula1 = new Aula('Bem vindo', 1); //Passando o nome e o videoID

const aula2 = new Aula ('Bem vindo, de Volta', 2);

console.log(aula1, aula2);



//Simulando new. Oque acontece com o new por trás dos panos

function novoObjeto (f, ...params) {

	const obj = {}
	obj.__proto__ = f.prototype;
	f.apply(obj, params);

	return obj;
}

const aula3 = novoObjeto(Aula, 'Bem vindo', 123);
const aula4 = novoObjeto(Aula, 'Bem vindo, de Volta', 234);
console.log(aula3);
console.log(aula4);
