const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];

pilotos.pop();//Remove o ultimo elemento

pilotos.push('Verstappen'); //Adiciona um elemento na ultima posição

console.log(pilotos);

pilotos.shift();//Remove o primeiro elemento 

console.log(pilotos);

pilotos.unshift('Hamilton'); //Adiciona elemento na primeira posição

// Splice pode adicionar e remover elementos

// Adicionando

pilotos.splice(2, 0, 'Bottas', 'Massa'); //Adicionando no indice 2 e 0 
console.log(pilotos);


// Remover

pilotos.splice(3, 1) // Removendo o índice 3 e o 1 
console.log(pilotos);

//Retornando um novo Array, gerado a partir do método slice

const pegandoPilotos = pilotos.slice(2) // Pegando elementos a partir da segunda posição ao ultimo

console.log(pegandoPilotos);

const pegandoPilotos2 = pilotos.slice(1, 4); //Vai da posição um ao quarto, mas não pega o quarto
console.log(pegandoPilotos2)