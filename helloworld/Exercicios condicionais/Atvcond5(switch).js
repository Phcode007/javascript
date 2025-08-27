const readline = require("readline-sync");

const codigo = Number(readline.question("Código do Produto: "));
const quantidade = Number(readline.question("Quantidade: "));

let produto = "";
let precoUnit = 0;

switch (codigo) {
  case 1:
    produto = "Cachorro Quente";
    precoUnit = 10.0;
    break;
  case 2:
    produto = "X-Salada";
    precoUnit = 15.0;
    break;
  case 3:
    produto = "X-Bacon";
    precoUnit = 18.0;
    break;
  case 4:
    produto = "Bauru";
    precoUnit = 12.0;
    break;
  case 5:
    produto = "Refrigerante";
    precoUnit = 8.0;
    break;
  case 6:
    produto = "Suco de laranja";
    precoUnit = 13.0;
    break;
  default:
    console.log("Código inválido!");
    process.exit(1);
}

const total = precoUnit * quantidade;

console.log(`\nProduto: ${produto}`);
console.log(`Valor total: R$ ${total.toFixed(2)}`);
