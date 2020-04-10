const time = {
  jogador1: "Neymar",
  jogador2: "Thiago Silva"
};

const time2 = {
  __proto__: time,
  jogador3: "Lucas"
};

const time3 = {
  __proto__: time2,
  jogador4: "Alisson"
};

// console.log(time3.jogador1, time3.jogador4);

const jogador = {
  vel: 0,
  forca: 0,
  maximo: 99,
  tomarRedbul(litros) {
    if (this.vel + litros <= this.maximo) {
      this.vel + litros;
    }
    if (this.forca + litros <= this.maximo) {
      this.forca + litros;
    } else {
      this.vel, (this.forca = this.maximo);
    }
  },
  status() {
    return `Velocidade ${this.vel}, força ${this.forca} de ${this.maximo}`;
  }
};

const neymar = {
  nome: "Neymar",
  forca: 70,
  vel: 90
};

const CR7 = {
  nome: "Cristiano Ronaldo",
  forca: 89,
  vel: 87,
  status() {
    return `${this.vel}: ${super.status()}`;
  }
};

Object.setPrototypeOf(CR7, jogador);
Object.setPrototypeOf(neymar, jogador);
console.log(neymar);
console.log(CR7);

CR7.tomarRedbul(10);
console.log(CR7.status());
neymar.tomarRedbul(7);
console.log(neymar.status());
