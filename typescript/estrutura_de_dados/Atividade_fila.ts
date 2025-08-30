import { Queue } from "./queue";
    import leia = require('readline-sync')

    const fila = new Queue<string>();
    let continuar: boolean = true;
    let opcao: number;

    do {
      console.log("*");
      console.log("");
      console.log("      1 - Adicionar Cliente na Fila");
      console.log("      2 - Listar todos os Clientes");
      console.log("      3 - Retirar Cliente da Fila");
      console.log("      0 - Sair");
      console.log("");
      console.log("*");
      console.log("");
      console.log("Entre com a opção desejada: ");
      opcao = leia.questionInt("");

      switch (opcao) {
    case 1:
      let nome: string = leia.question("Digite o nome: ");
      fila.enqueue(nome);
      console.log("\nFila:");
      fila.printQueue();
      console.log("\nCliente Adicionado!");
      break;

    case 2:
      if (fila.isEmpty()) {
        console.log("A Fila está vazia!");
      } else {
        console.log("\nFila:");
        fila.printQueue();
      }
      break;

    case 3:
      if (fila.isEmpty()) {
        console.log("A Fila está vazia!");
      } else {
        fila.dequeue();
        console.log("\nFila:");
        fila.printQueue();
      }
      break;

    case 0:
      console.log("Saindo...");
      continuar = false;
      break;

    default:
      console.log("Opção inválida!");
  }
  } while(continuar)