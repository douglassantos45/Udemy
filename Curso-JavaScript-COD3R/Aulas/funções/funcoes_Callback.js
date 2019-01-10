const fabricantes = ["Mercedes", "Audi", "BMW"];

function imprimir(nome, indice) {
	console.log(`${indice + 1}. ${nome}`);
}

//ForEach para percorrer os valores
fabricantes.forEach(imprimir);

//Função Arrow
fabricantes.forEach(fabricante = (fabricantes) =>  console.log(fabricantes));