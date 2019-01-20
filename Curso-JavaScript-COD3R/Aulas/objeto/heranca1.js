const ferrari = {
	modelo: 'F400',
	velMaxima: 340
}

const volvo = {
	modelo: 'A40',
	velMaxima: 220
}


console.log(ferrari.__proto__); // Utiliza o __proto__ para acessar o atributo herdado do Pai
console.log(ferrari.prototype === Object.prototype); // Não é estreitamente igual
console.log(Object.prototype.__proto__ === null); // É estreitamente igual
console.log(volvo.__proto__); // Utiliza o __proto__ para acessar o atributo herdado do Pai