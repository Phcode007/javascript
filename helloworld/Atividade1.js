const readline = require("readline-sync");

const salario = readline.question("Digite seu salário: ");
const abono = readline.question("Digite o abono: ");

let novoSalario = Number(salario) + Number(abono);

console.log("Seu novo salário é " + novoSalario);
