const readline = require("readline-sync");

const nomeD = readline.question("Digite o nome do doador:");

const idade = Number(readline.question("Digite a idade do doador:"));

const primeD =
  readline.question("Esta e a primeira doacao do paciente?").toLowerCase() ===
  "true";

if (idade >= 18 && idade <= 59) {
  console.log(`${nomeD} está apto para doar sangue!`);
} else if (idade >= 60 && idade <= 69) {
  if (!primeiraDoacao) {
    console.log(`${nomeD} está apto para doar sangue!`);
  } else {
    console.log(`${nomeD} não está apto para doar sangue!`);
  }
} else {
  console.log(`${nomeD} não está apto para doar sangue!`);
}
