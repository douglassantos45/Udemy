//IIFE -> Immediately Invoked Function Expression

//Declarando uma IIFE anônima para fugir do escopo global
//As funções declarada como IIFE tem que estarem dentro de parênteses

(function () {

	console.log('Será executada na hora!');
	console.log('Foge do escopo mais abrangente');

})();//Parênteses para chamar a função