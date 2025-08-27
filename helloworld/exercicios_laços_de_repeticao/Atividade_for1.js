const leia =require("readline-sync")

let ni1= leia.question("Digite o primeiro numero")
let ni2= leia.question("Digite o segundo numero")

if( ni1 >= ni2){
  console.log("Intervalo errado, o primeiro numero e maior que o segundo")
}

console.log(`Os numeros que sao multiplos de 3 e 5 ${ni1} e ${ni2}: `)

for (let i =ni1; i <= ni2; i++) {
  if (i % 15 === 0) {
    console.log(i);
  }
}