informacao = ['nome', 'idade', 'cidade', 'apelido']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

informacao.forEach(imprimir)
informacao.forEach(informacao => console.log(informacao))