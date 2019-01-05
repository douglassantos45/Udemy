const escola = "Cod3r";

console.log(escola.charAt(4)); //Pega o Valor correspondente a 4 na variável escola que é o valor r
console.log(escola.charCodeAt(3)); // Pega o Valor em forma de Unicode
console.log(escola.indexOf('C')); // Pega a posição da letra C na variável escola
console.log(escola.substring(1)); //Vai pegar a partir da posição 1 da variável e conta até o final
console.log(escola.substring(0,3)); //Vai pegar da posição 0 até o 3, ignorando o valor 3, ou seja, de 0 a 2 = Cod

console.log('Escola '.concat(escola).concat("!")); //Forma de concatenação

console.log(escola.replace(3, 'e')); //Transforma o 3 que era o "E" do Cod3r em e
console.log(escola.replace('C', 'G')); //Outro exemplo com replace

console.log('Ana,Maria,Pedro'.split(',')); //Vai a partir do split vírgula (,), criar um Array

