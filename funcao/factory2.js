function criarProduto(nome, preco) {
    return { 
    nome,
    preco,
    deconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('ipad', 1199.49))