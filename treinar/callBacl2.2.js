const velocidade = [101, 120, 80, 90, 60, 125, 130];

const velocidadeBaixa = velocidade.filter(function(velocidade) {
  return velocidade < 100;
});
velocidadeBaixa.sort();
console.log(velocidadeBaixa);

const velocidadeMenorQue = velocidade => velocidade < 100
const velocidadeMenorQue100 = velocidade.filter(velocidadeMenorQue)
velocidadeMenorQue100.sort()
console.log(velocidadeMenorQue100)