const leia = require("readline-sync");

const n1 = parseInt(leia.question("Digite o primeiro numero: "));
const n2 = parseInt(leia.question("Digite o segundo numero: "));
const n3 = parseInt(leia.question("Digite o terceiro numero: "));
const n4 = parseInt(leia.question("Digite o quarto numero: "));
const n5 = parseInt(leia.question("Digite o quinto numero: "));
const n6 = parseInt(leia.question("Digite o sexto numero: "));
const n7 = parseInt(leia.question("Digite o setimo numero: "));
const n8 = parseInt(leia.question("Digite o oitavo numero: ")); 
const n9 = parseInt(leia.question("Digite o nono numero: "));
const n10 = parseInt(leia.question("Digite o decimo numero: "));

let pares = 0;
let impares = 0;    

for (let i = 1; i <= 10; i++) {
  const numero = eval(`n${i}`); 
    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log(`Quantidade de números pares: ${pares}`);
console.log(`Quantidade de números ímpares: ${impares}`);