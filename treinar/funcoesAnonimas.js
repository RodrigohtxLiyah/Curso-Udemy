const total = function(a, b) {
  return a + b;
};

const imprimirResultado = function(a, b, operacao = total) {
  console.log(operacao(a, b));
};

imprimirResultado(5, 3);
imprimirResultado(5, 3, total);
imprimirResultado(3, 4, function(a, b) {
  return a - b;
});

imprimirResultado(3, 4, (a, b) => a * b)

const pessoa = {
    falar: function() {
        console.log('Opa')
    }
}

pessoa.falar()
