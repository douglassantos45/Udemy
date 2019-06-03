Array.prototype.filter2 = function(callback) {
    const newArray = [] //Gerando novo Array

    for (let i = 0; i < this.length; i++) {
        if(callback(this.i, i, this)){
            newArray.push(this.i)
        }
    }

    return newArray

}

const produtos = [
    {nome: "Notebook", preco: 2345, fragil: true},
    {nome: "Lápis", preco: 0.60, fragil: false},
    {nome: "Iphone", preco: 5434, fragil: true}
]

const caro = produto => produto.preco > 500
const fragil = produto => produto.fragil 

console.log(produtos.filter2(caro).filter2(fragil))