function criarproduto(nome, preços) {
  return {
    nome,
    preços,
    desconto: 0.1
  };
}

console.log(criarproduto("Smarthphone", 1999.0));
console.log(criarproduto("tênis", 150.0));
