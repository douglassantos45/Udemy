class ContaBancaria {

    constructor () {
        this.agencia = 134524;
        this.numeroConta = 1983404;
        this.saldo = 100;
    }

    depositar(valorSaldo) {
        this.saldo += valorSaldo;
    }

    sacar(saqueValor) {
        this.saldo -= saqueValor;
    }

    exibirSaldo() {
        return this.saldo;
    }
}

let x = new ContaBancaria();
x.depositar(300);
console.log(x.exibirSaldo());
x.sacar(200);
console.log(x.exibirSaldo());
