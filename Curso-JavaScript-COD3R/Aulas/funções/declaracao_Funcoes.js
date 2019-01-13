
console.log(soma(3, 4)); //Chamando a Função Antes

// Function declaration
function soma (x, y) {
	return x + y;
}

// Function Expression

const subtracao = function (x, y) {
	return x - y;
}
//Chamando a função Depois
console.log(subtracao(4, 7));

// Named Function

const multiplicacao = function (x, y) {
	return x * y;
}

//Chamando a Função Depois
console.log(multiplicacao(5, 3));