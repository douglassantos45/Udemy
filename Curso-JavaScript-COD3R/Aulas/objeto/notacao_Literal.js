a = 1;
b = 1;
c = 1;

//forma antiga
const obj = {a: a, b:b, c:c}

//Forma literal
const obj1 = {a, b, c}

console.log(obj, obj1);
console.log();
console.log();


const obj2 = {}

let nomeAtributo = 'Maria';
let notaAtributo = 7.12;

//forma antiga
obj2[nomeAtributo] = notaAtributo

//Forma literal
obj3 = {[nomeAtributo]: notaAtributo}

console.log(obj2, obj3);
console.log();
console.log();


obj4 = {

	//forma antiga
	funcao1: function() {

		return 'Forma Antiga';
	},

	//Forma literal
	funcao2 () {

		return 'Forma Literal';
	}

}

console.log(obj4);
console.log(obj4.funcao1());
console.log(obj4.funcao2());