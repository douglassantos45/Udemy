const aprovados = ['João', 'Frances', 'Anna Júlia', 'Rayane'];

//Percorrendo aprovados com função que pega o nome e o indice do array. O INDICE tem que ser o segundo elemento da função
aprovados.forEach(function(nome, indice){

	console.log(`${indice + 1}) ${nome}`);
})
console.log();


//Função Arrow Function

aprovados.forEach(nome => console.log(nome)); //Pegar somente o nome
console.log();


// Passando a função para uma variável

const exibirAprovados = aprovados => console.log(aprovados);
//Passando a variável para o forEach
aprovados.forEach(exibirAprovados);