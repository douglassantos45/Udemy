function aleatorio ([min = 0, max = 1000]) {
    if ( min > max ) [ min, max ] = [ max, min ]; // O operador min for maior que o máximo, inverta os valores
    const valor = Math.random() * (max-min) + min;
    return Math.floor(valor); //Arredondamento para cima
}

console.log(aleatorio([40, 50]));
console.log(aleatorio([900]));//Passando somente o min
console.log(aleatorio([, 500])); // Passando somente o max e deixando o min vazio
console.log(aleatorio([])); // Exibindo os valores padrões