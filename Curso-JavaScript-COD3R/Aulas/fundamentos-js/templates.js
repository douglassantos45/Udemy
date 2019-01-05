const nome = 'Rebeca';
const cocatenacao = 'Olá ' + nome + '!';

//Nova forma usando Template

const template = `
    Olá 
    ${ nome }!`;

console.log(cocatenacao, template);

//Templates Com Expressões Matemáticas

console.log(`1 + 1 = ${ 1 + 1}`);