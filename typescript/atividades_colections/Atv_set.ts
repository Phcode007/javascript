import readlinesync = require("readline-sync");

let listaNumeros: Set<number> = new Set();

for (let i =0; i<10; i++){
    let numero: number = readlinesync.questionInt("Digite o " + (i+1) + "º número: ");
    listaNumeros.add(numero);
}

console.log("Os números digitados foram: " + Array.from(listaNumeros).join(", "));