class Lancamento {

	// Funções Constructors é chamada no momento que é inicializada
	constructor (nome = 'Guanabara', valor = 0) {
		this.nome = nome;
		this.valor = valor;
	}

}

class CicloFinanceiro {

	constructor (mes, ano) {

		this.mes = mes;
		this.ano = ano;
		// Criando array para agrupar os valores de lancemento
		this.lacamentos = [];
	}

	/* Parâmetros Variáveis - desse jeito ele retorna os elementos concatendo como array*/
	addLacamento (...lacamentos) {

		lacamentos.forEach(l => this.lacamentos.push(l)); // Percorrer e lançar o elementos para lacamentos
	}

	// Retorna os valores
	sumario () {

		let valorConsolidado = 0; //Armazenará(concatenar) os lançamentos e retornar

		this.lacamentos.forEach(l => {

			valorConsolidado += l.valor;
		})

		return valorConsolidado;
	}

}

const salario = new Lancamento ('Salário', 4500);
const contaLuz = new Lancamento ('Luz', -230);

const contas = new CicloFinanceiro(6, 2019);

contas.addLacamento(salario, contaLuz);

console.log(contas.sumario());