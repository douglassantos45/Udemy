// novo recurso do ES2015

// DESTRUCTIRING em um OBJETO

const pessoa = {
	nome: 'Jose',
	idade: 15,
	endereco: {
		logradouro: 'Rua ABC',
		numero: 1000
	}
}


// Acessando(DESTRUCTIRING de um OBJETO, ultiliza-se em objetos chaves ' {} ')

const { nome, idade } = pessoa; // extraia(tirar) nome e idade de (objeto) pessoa (ou que estão em pessoa)
console.log(nome, idade);

const { nome: n, idade: i } = pessoa; // Extraia(tirar) nome e idade e passe os valores respectivos para as variáveis n e i do (objeto) pessoa

console.log(n, i);

const {sobrenome, bemHumorado = true} = pessoa;// Extraindo valores que não existe no Objeto pessoa
console.log(sobrenome, bemHumorado); // Não da erro, mas retorna Undefined


const { endereco: { logradouro, numero }} = pessoa; // extraia logradouro e numeor que estão em endereco  de (objeto) pessoa (ou que estão em pessoa)
console.log( logradouro, numero);


/*
//Não pode imprimir o valor endereco, só suas propriedades

const {endereco: { logradouro, numero }} = pessoa;
console.log(endereco); */