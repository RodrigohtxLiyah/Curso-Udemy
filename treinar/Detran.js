var limite = 100;
var extra = 1000;
var velocidade = Number("1000");
var cuidado = "Utilize sempre cinto de segurança!";

function multa() {
  if (velocidade <= limite) {
    console.log(`${cuidado}`);
    console.log(`Sua velocidade atual é de ${velocidade}Km`);
  } else if (velocidade >= extra) {
    console.log(`Sua velocidade é de ${velocidade}km`);
    console.log(`Puta merda, você é o Flash?!`);
    console.log(`Velocidade dessas não se multa, se respeita.`);
  } else if (velocidade > limite) {
    console.log(`Velocidade atual ${velocidade}`);
    console.log(`Você ultrapassou a velocidade limite de ${limite}Km, Multado`);
  }
}
multa();
