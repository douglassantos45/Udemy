function cadastrarProduto (nome, preco) {

	return {
		nome,
		preco,
		desconto: 0.1
	}
}

console.log(cadastrarProduto('Notebook', 3453));
console.log(cadastrarProduto('iPad', 1234));
console.log(cadastrarProduto());
