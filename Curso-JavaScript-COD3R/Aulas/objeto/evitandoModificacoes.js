// Object preventExtensions - Object.preventExtensions

const produto = Object.preventExtensions({

	nome: 'Nescau',
	valor: 2.50,
	tag: 'Promoção'
})

console.log(produto);

produto.nome = 'Nesquik';
produto.descricao = 'Ótimo para saude cancerígena'; // preventExtensions Não permite adicionar novos valores. Apenas alterar e deletar
delete produto.tag;

console.log(produto);



// Object Seal - Object.seal

const pessoas = Object.seal({

	nome: 'Anns Júlia',
	idade: 19,
	genero: 'Feminino'
})

pessoas.nome = 'Anna Carolina';
delete pessoas.idade; // Seal - ou Sealed, selado - Não permite excluir valores, nem adicionar valores. Apenas alterar valores já existentes

pessoas.descricao = 'Cursando Faculdade de Médicina';

console.log(pessoas);