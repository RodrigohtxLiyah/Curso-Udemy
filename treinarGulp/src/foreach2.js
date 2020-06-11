Array.prototype.forEach2 = function(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const animeAwards = [
    {nome: 'Konosuba', eps: 24},
    {nome: 'Demon Slayer', eps: 24}
]

const numeroDeEps = animeAwards => animeAwards.eps == 24

console.log(animeAwards.filter(numeroDeEps))