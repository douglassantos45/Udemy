// novo recurso do ES2015

// DESTRUCTIRING em um ARRAY usa os colchetes []

const valores = [5.5, 9.2, 3.5, 9.2]; //Array

const [] = valores; // Extraindo Valores em Array
console.log(valores);


console.log(a);


const [n1, n2, n3, n4] = [10, 3, 5, 3]; // Criando e Atribuindo valores
console.log(n1, n2, n3,n4);


// NÃO recomendado
const [m1, ,m3, m5, m6 = 0] = [10, 5, 6, 3, 6]; // Criando e Atribuindo valores e pulando outros como m2(que tinha o valor 5) e m4(que tinha o valor 3), eles serão ignorados
console.log(m1, m3, m5, m6);

//Não recomendado
const b = [, [t1, , t3]] = [[9, 3, 5], [1, 5, 6]];// Criando e Atribuindo valores e pulando outros como o espaço t2
console.log(a);

// Acessando(DESTRUCTIRING de um OBJETO, ultiliza-se em objetos chaves ' {} ')
/*
const { nome, idade } = pessoa; // extraia nome e idade de (objeto) pessoa (ou que estão em pessoa)
console.log(nome, idade);

const { nome: n, idade: i } = pessoa;


console.log(n, i);

const { endereco: { logradouro, numero }} = pessoa; // extraia logradouro e numeor que estão em endereco  de (objeto) pessoa (ou que estão em pessoa)
console.log( logradouro, numero);


//Não pode imprimir o valor endereco, só suas propriedades

const {endereco: { logradouro, numero }} = pessoa;
console.log(endereco); */