class produto {
  constructor(nome) {
    this.nome = nome;
  }
  falar() {
    console.log(`Produto ${this.nome}`);
  }
}
const p1 = new produto("Leite");
p1.falar();

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Produto é: ${nome}`)
    }
}

const p2 = criarPessoa('Açucar')
p2.falar()
p1.falar()
