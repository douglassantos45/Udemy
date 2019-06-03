//Criando um Array
const produtos = [
    {nome: "Boneca", preco: 1.45, fragil: true},
    {nome: "Carrinho", preco: 1.24, fragil: true},
    {nome: "Notebook", preco: 4566, fragil: true},
    {nome: "Iphone", preco: 2456, fragil: false}
]

console.log(produtos.filter(function (produto) {
    return false //Retorna os elemntos, nenhum elemento é filtrado
    //return false //Não retorna os elementos, todos são filtrado
}))

//Filtrando por preço e por fragilidade

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

//Imprimir valores filtrados
console.log(produtos.filter(caro).filter(fragil))

