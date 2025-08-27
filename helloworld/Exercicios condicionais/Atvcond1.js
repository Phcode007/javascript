const readline = require("readline-sync");

const A = readline.question("Digite o numero 1: ");
const B = readline.question("Digite o numero 2: ");
const C = readline.question("Digite o numero 3: ");

let soma = Number(A) + Number(B) + Number(C);

if (soma > 5) {
  console.log("A soma e maior que 5");
} else if (soma < 5) {
  console.log("A soma e menor que 5");
} else {
  console.log(" A soma e igual a 5");
}
