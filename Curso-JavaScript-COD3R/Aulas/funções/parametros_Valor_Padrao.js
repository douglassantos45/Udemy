// Estratégia 1 para gerar valores padrões
function soma ( a, b, c ) {

	// A recebe um valor passado, se não ele recebe 1
	a = a || 1;
	b = b || 1;
	c = c || 1;

	return a + b + c;
}

console.log(soma(), soma(2), soma(1, 2, 3), soma(0, 0, 0));

// Estratégias 2, 3 e 4

//Caso os valores não sejam informados
function soma2 ( a, b, c ) {

	// Usando um operador ternário para verificar se a é estritamente diferente de undefine, se for, atribui o próprio valor de a, senão, ele assume o valor de 1
	a = a !== undefined ? a : 1; // Ou valor zero

	// Verifica s dentro de arguments existe o indece 1, se existir pegue o valor de b, senão pegue o valor padão, ou seja, 1
	b = 1 in arguments ? b : 1; // Ou valor zero

	// Verificar se uma variável é not a number, se não for um número, ele pega o  valor padão, ou seja, 1. Se for um número, retorna o valor de c
	c = isNaN(c) ? 1 : c; // Ou valor zero

	return a + b + c;
}

console.log(soma2(), soma2(2), soma2(1, 2, 3), soma2(0, 0, 0));



// Estratégia para valores Padrões do próprio ES2015

function soma3 ( a = 1, b = 1, c = 1 ) {
	return a + b + c;
}

console.log(soma3(), soma3(2), soma3(1, 2, 3), soma3(0, 0, 0));
