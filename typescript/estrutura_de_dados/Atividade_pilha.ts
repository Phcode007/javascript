import { Stack } from "./stack";
import leia = require("readline-sync");

const pilha = new Stack<string>();
let continuar: boolean = true;
let opcao: number;

do {
  console.log("\n===========================");
  console.log("        MENU LIVROS");
  console.log("===========================");
  console.log("1 - Adicionar Livro na Pilha");
  console.log("2 - Listar todos os Livros");
  console.log("3 - Retirar Livro da Pilha");
  console.log("0 - Sair");
  console.log("===========================\n");

  opcao = leia.questionInt("Digite uma opcao: ");

  switch (opcao) {
    case 1:
      let livro: string = leia.question("Digite o nome: ");
      pilha.push(livro);
      console.log("\nPilha:");
      pilha.printStack();
      console.log("\nLivro adicionado!");
      break;

    case 2:
      if (pilha.isEmpty()) {
        console.log("A Pilha está vazia!");
      } else {
        console.log("\nPilha:");
        pilha.printStack();
      }
      break;

    case 3:
      if (pilha.isEmpty()) {
        console.log("A Pilha está vazia!");
      } else {
        pilha.pop();
        console.log("\nPilha:");
        pilha.printStack();
      }
      break;

    case 0:
      console.log("Saindo...");
      continuar = false;
      break;

    default:
      console.log("Opção inválida!");
  }
} while (continuar);
