const readline = require("readline-sync");

const crct1 = readline.question("Digite a primeira característica:");
const crct2 = readline.question("Digite a segunda característica:");
const crct3 = readline.question("Digite a terceira característica:");

if (crct1 === "vertebrado") {
  if (crct2 === "mamifero") {
    if (crct3 === "onivoro") {
      console.log("Homem");
    } else if (crct3 === "herbivoro") {
      console.log("Vaca");
    }
  } else if (crct2 === "ave") {
    if (crct2 === "carnivoro") {
      console.log("Águia");
    } else if (crct3 === "onivoro") {
      console.log("Pomba");
    }
  }
} else if (crct1 === "invertebrado") {
  if (crct2 === "inseto") {
    if (crct3 === "hematofago") {
      console.log("Pulga");
    } else if (crct3 === "herbivoro") {
      console.log("Lagarta");
    }
  } else if (crct2 === "anelideo") {
    if (crct3 === "hematofago") {
      console.log("Sanguessuga");
    } else if (crct3 === "onivoro") {
      console.log("Minhoca");
    }
  }
}
