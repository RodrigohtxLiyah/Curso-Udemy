class teste {
  constructor(coisas) {
    this.coisas = coisas
  }
}

class teste2 extends teste {
  constructor(coisas, carreira = 'programador') {
    super(coisas)
    this.carreira = carreira
  }
}

const coisa = new teste2('anime')

console.log(coisa)