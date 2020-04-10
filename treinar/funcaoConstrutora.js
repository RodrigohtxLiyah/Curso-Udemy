function temp(temperaturaMax = 100, delta = 5) {
  let temperatura = 0;

  this.subir = function() {
    if (temperatura + delta <= temperaturaMax) {
      temperatura += delta;
    } else {
      temperatura = temperaturaMax;
    }
  };
  this.gettemperatura = function() {
    return temperatura;
  };
}

const celsius = new temp();
celsius.subir();
console.log(celsius.gettemperatura());

const f = new temp(400, 22)
f.subir()
f.subir()
f.subir()
console.log(f.gettemperatura())

console.log(typeof temp)
console.log(typeof f)