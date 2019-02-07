//let pessoas = new Array ('Bia', 'Carlos', 'João');

//console.log(pessoas[0]);

let pessoas = ['Ana', 'Carlos', 'João'];
let idade = [17, 23, 45];

//Percorrendo o Array pessoas

for (let p = 0; p in pessoas ; p++) {

	console.log(pessoas[p], idade[p] + ' Anos');
}

console.log();

//Con forEach
pessoas.forEach(p => {

	console.log(p);

})


console.log(pessoas.length); //Contando o tamanho do Array
console.log(pessoas == undefined); //Verificando o Array


//Adicionando Elementos em um Array

pessoas[4] = 'Raphael'; //Você mesmo escolhe a posição
pessoas.push('Fernando'); //Sempre adiciona no último


//Deletar elementos em um array

delete pessoas[2];
console.log(pessoas);

console.log(pessoas.sort()); // Alterando a posição do Array