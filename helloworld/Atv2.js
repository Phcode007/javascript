const readline = require("readline-sync");

const nota1 = readline.question("Digite a primeira nota:");
const nota2 = readline.question("Digite a segunda nota:");
const nota3 = readline.question("Digite a terceira nota:");
const nota4 = readline.question("Digite a quarta nota:");

let calculoMedia =
  (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4;

console.log(`A média geral é: ${calculoMedia}`);
