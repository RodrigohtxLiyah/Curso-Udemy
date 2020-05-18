const compras = [
  { nome: "Feijão",
    preco: 5.0,
    comestivel: true
  },{
    nome: "Arroz",
    preco: 8.5,
    comestivel: true
  }];

const compras2 = [
  { nome: "feijão", preco: 5.0 },
  { nome: "Arroz", preco: 8.5 }
];

const possoComer = (resultado, comestivel) => resultado && comestivel
console.log(compras.map(a => a.comestivel).reduce(possoComer))

const possoComer2 = (resultado, comestivel) => resultado || comestivel
console.log(compras.map(a => a.comestivel).reduce(possoComer2))
