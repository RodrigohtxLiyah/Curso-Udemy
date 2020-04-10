const fs = require("fs");

const caminho = __dirname + "/estoqueDeracao.json";

const conteudo = fs.readFileSync(caminho, "utf-8");

const config = require("./estoqueDeracao.json");

const objsArray = Object.values(config);

const produto2 = [
  {
    nome: "Proplan Castrados",
    preco: 180.9,
    precoKG: 14.49,
    descricao: "Para gatos castrados"
  },
  {
    nome: "Proplan filhote",
    preco: 170.9,
    precoKG: 12.99,
    descricao: "Proplan carne e arroz",
    desconto: 0.1
  }
];

objsArray.push(produto2);

fs.writeFile(
  __dirname + "/arquivoGerado.json",
  JSON.stringify(objsArray),
  err => {
    console.log(err || "Arquivo salvo!");
  }
);
