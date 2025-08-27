const readline = require("readline-sync")

const nome = readline.question("Digite o nome do colaborador: ")
const cdCargo = parseInt(readline.question("Digite o codigo do cargo: "))
const salario = parseInt(readline.question("Digite o salario: "))

const cargo=""
const reajuste=0

switch (cdCargo){
    case 1:
    cargo ="Gerente"
    reajuste= 0.10
    break

    case 2:
    cargo ="Vendedor"
    reajuste= 0.07
    break 

    case 3:
    cargo ="Supervisor"
    reajuste= 0.09
    break

    case 4: 
    cargo ="Motorista"
    reajuste= 0.06
    break

    case 5:
    cargo ="Estoquista"
    reajuste= 0.05
    break

    case 6:
    cargo ="Tecnico de TI"
    reajuste= 0.10
    break

    default:
        console.log("Codigo de cargo invalido, digite outro codigo")
        process.exit()
}

const novoSalario = salario + (salario*reajuste)

console.log("\nNome do colaborador: " + nome)
console.log("Cargo: " + cargo)
console.log("Salario: R$ " + novoSalario.toFixed(2))