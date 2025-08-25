const readline = require("readline-sync");

const salarioBruto = readline.question("Digite o valor do Salário Bruto:");
const adicionalNoturno = readline.question(
  "Digite o valor do Adicional Noturno:"
);

const horasExtras = readline.question("Digite o valor das Horas Extras:");
const descontos = readline.question("Digite o valor total de Descontos:");

const salarioLiquido =
  salarioBruto + adicionalNoturno + horasExtras - descontos;

const salarioFormatado = salarioLiquido.toFixed(2);

console.log(`O Salário Líquido do colaborador é: R$ ${salarioFormatado}`);
