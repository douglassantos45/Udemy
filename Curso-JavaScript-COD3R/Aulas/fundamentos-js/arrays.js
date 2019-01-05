//Declarnado um Array
const valores = [5.5, 9.2, 3.5, 9.2]; 

console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[4] = 10;//Adicionando o valor 10 a quarta posição
console.log(valores);
console.log(valores.length);//Length contar

//Adicionando novos valores com o Push

valores.push({id: 3}, false, null, 'adicionado String');

//Pegar o ultimo valor do array e ele vai perder esse valor com o método Pop
console.log(valores.pop());


//Deletando um elemento ou valor em um Array
delete valores[0];
console.log(valores);