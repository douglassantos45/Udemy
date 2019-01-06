//Operador Ternário

/*
//Funcionaria também como uma função

const resultado = nota => {
 return nota >= 7 ? 'Aprovado' : 'Reprovado';
}
 */

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'; // Variável do tipo constante vai receber um parâmetro nota, => é da função, depois vem a expressão relacional

//Mostrando resultado
console.log(resultado(6.1));
