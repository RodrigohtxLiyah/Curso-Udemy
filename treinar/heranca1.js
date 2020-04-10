const  Nyke = {
    jogador: 'Neymar',
    valor: 3000000
}

const Adidas = {
    jogador: 'Messi',
    valor: 3600000
}

console.log(Nyke.__proto__)
console.log(Nyke.__proto__ === Object.prototype)
console.log(Adidas.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function meuObjeto() {}
console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype)