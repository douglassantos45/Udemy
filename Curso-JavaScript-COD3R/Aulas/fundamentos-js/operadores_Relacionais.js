console.log('01)', '1' == 1 ); //Um é igual a Um = Sim, comparando o velor e não o tipo
console.log('02)', '1' === 1 ); //Um é estritamente igual a Um = Não, porque além de comparar o valor ele compara também o tipo
console.log('03)', '3' != 3 ); //Três é diferente de Três = Não, porque estamos comparando o valor e não o tipo
console.log('04)', '3' !== 3 ); //Três é estritamente diferente de Três = Sim, porque além de comparar o valor ele compara também o tipo

console.log('05)', 3 < 2 );
console.log('06)', 3 > 2 );
console.log('07)', 3 <= 2 );
console.log('08)', 3 >= 2);

const d1 = new Date(0); //O zero referece a Janeiro pelo JS
const d2 = new Date(0); //Também referece a Janeiro pelo JS

//Vai da Falso em Ambos os testes porque ele estará comparadno valores alocados na memória e não o valor ou tipo
console.log('09)', d1 === d2);
console.log('10', d1 == d2);

//Nesse caso ocorerá o contrário, aqui será Verdadiero porque estou comparando o Number com o método GETTIME. Aqui eles tem o mesmo valor e tipo
console.log('11)', d1.getTime() === d2.getTime());//Comparando os valores Number em milisegundos
console.log('12)', d1.getTime() == d2.getTime());//Comparando os valores Number em milisegundos

console.log('13', undefined == null );
console.log('14', undefined === null );