function aleatorio ({ min = 0, max = 100 }){ //Retorna um número aleatório, passando dos atributos dentro do parêmentro destructiring, não é um Objeto, mas vou passar um objeto para essa função, para ao invés de ter que digitar ex aleatorio.min (objeto ponto valor)
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor); // Retornando um valor arredondado para cima
}

const obj = {max: 50, min: 40}; //Passando os valores para um objeto
console.log(aleatorio(obj));

console.log(aleatorio({})); //Extraindo os valores sem passar valores específicos
console.log(aleatorio({max: 10}));// EXtraindo os valores passando somente o max
console.log(aleatorio({max: 100, min: 20}));// Extraindo os valores do max e min

// Sem passar a função sem objeto nenhum, ocorrerá um erro
//console.log(aleatorio());
