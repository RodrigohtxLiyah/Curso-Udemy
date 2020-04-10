class Lancamento {
  constructor(nome, valor) {
    this.nome = nome;
    this.valor = valor;
  }
}

class cicloFinanceiro {
  constructor() {
    this.lancamentos = [];
  }
  addLancamentos(...lancamentos) {
    lancamentos.forEach(l => this.lancamentos.push(l));
  }

  sumario() {
    let valorConsolidado = 0;
    this.nome = "C.a.LTDA"
    this.lancamentos.forEach(l => {
      valorConsolidado += l.valor;
    });
    return `${this.nome}:  saldo = ${valorConsolidado}`
  }
}

const saldo  = new Lancamento("", 50000)
const despesaEstab = new Lancamento("", -10000)
const funcionario = new Lancamento("", -13800)
const publicidade = new Lancamento("", -8500)

const contas = new cicloFinanceiro()
contas.addLancamentos(saldo, despesaEstab, funcionario, publicidade)
console.log(contas.sumario())