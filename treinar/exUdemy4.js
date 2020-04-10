function somar(valorDecimal) {
    resultado = `R$ ${valorDecimal.toFixed(2).replace(".", ",").toString()}`
    console.log(resultado)
}
somar(2 + 8 + 9)
