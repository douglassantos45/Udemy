//Criando o forEach próprio

//Relacionando o ForEach criado ao Object prototype. O parâmetro da função, podera ser qualquer nome, não apenas callback
Object.prototype.forEach2 = function(callback) {

    for( let i = 0; i < this.length; i++ ) {
        //Chamando função callback passando 3 parâmentros: o primeiro parâmetro é o próprio valor(const pessoas), o segundo é o indice(posição) e o ultimo é array completo
        callback(this[i], i, this);
    }
}

const pessoas = ['Andrea', 'Marlos', 'Carlos', 'MeninaLinda'];

pessoas.forEach2(function(nome, indice) {
    
    console.log(`${indice + 1}) ${nome}`)
})

//Com Arrow Function
//pessoas.forEach2(elemento => console.log(elemento)) 
