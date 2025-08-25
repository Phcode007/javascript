const readline = require("readline-sync");

const numero = Number(readline.question("Digite um numero: "));

let igualdade;
let sinal;

if (numero % 2 === 0) {
  igualdade = "par";
} else {
  igualdade = "impar";
}

if (numero >= 0) {
  sinal = "positivo";
} else {
  sinal = "negativo";
}

console.log(`O numero ${numero} é ${igualdade} e ${sinal}`);
