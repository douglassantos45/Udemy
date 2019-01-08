function area ( largura, altura ) {

	const area = largura * altura;

	if ( area > 20 ) { // Sem retorno

		//Não recomendado fazer a função se comportar de um maneira diferente do real proposito da função, que é calcular a area
		console.log(`Valor acima do permitido: ${area}m².`);
		//return area; // Pode passar parâmetro também

	} else { // Com retorno

		return area;
	}
}

console.log(area(2, 3));
console.log(area()); // Vai retornar um valor not a number
console.log(area(2,)); // Vai retornar um valor not a number
console.log(area(5, 5)); // Testando o IF com valor acima do permitido