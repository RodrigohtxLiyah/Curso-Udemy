function pessoa(nome) {
    this.nome = nome
    
    this.falar = function() {
        console.log(`Isso é ${this.nome}`)
    }
}

const p1 = new pessoa('Maçã')
p1.falar() 