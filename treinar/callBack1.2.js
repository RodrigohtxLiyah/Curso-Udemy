const produtos = ['Feijão', 'Arroz', 'Batata', 'Frango']
const marcas = ['Seara', 'BH', 'CampoMinas', 'Sadia']
function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

produtos.forEach(imprimir)
marcas.forEach(marca => console.log(marca))