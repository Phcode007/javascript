const leia = require("readline-sync");

let menorq21=0;
let maiorq50=0;

while(true){
    const idade = parseInt(leia.question("Digite a idade : "));
    if (idade < 0) {
        break;
    }
    if (idade < 21) {
        menorq21++;
    } else if (idade > 50) {
        maiorq50++;
    }
}