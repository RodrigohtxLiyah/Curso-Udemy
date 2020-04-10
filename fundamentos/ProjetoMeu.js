function diaLivre(trabalho, estudar) {
    const assistirSerie = estudar || trabalho
    const jogar = trabalho && estudar
    const  diaRuim = !assistirSerie

    return { assistirSerie, jogar, diaRuim }
}

console.log(diaLivre(true, true))
console.log(diaLivre(true, false))
console.log(diaLivre(false, true))
console.log(diaLivre(false, false))