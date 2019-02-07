const numeros = [1, 2, 3, 4, 5];
//Multipliicando valores
resultado = numeros.map(function(elemento){
	return elemento * 2;
})

console.log(resultado);


//Criando funções

//Adicionando 10 aos elementos
const soma10 = elemento => elemento + 10;

resultado = numeros.map(soma10);
console.log(resultado)


//Multiplicando os elementos por 3
const triplo = elemento => elemento * 3;

resultado = numeros.map(triplo);
console.log(resultado);

//Tranformando em Dinheiro
const transformDinheiro = elemento => `R$ ${parseFloat(elemento).toFixed(2).replace('.', ',')}`;//Convertendo elemento para float, passando 2 casas decimais e trocando o ponto por vírgula

resultado = numeros.map(transformDinheiro);
console.log(resultado)

//Pasando todos as funções para uma unica variável
resultado = numeros.map(soma10).map(triplo).map(transformDinheiro);
console.log(resultado);


//Com forEach
resultado.forEach(elemento => console.log(elemento))