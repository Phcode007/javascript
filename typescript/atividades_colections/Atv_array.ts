import readlinesync = require("readline-sync");

let cor: string= readlinesync.question("Digite a  primeira cor: "); 
let cor2: string= readlinesync.question("Digite a segunda cor: ");
let cor3: string= readlinesync.question("Digite a terceira cor: ");
let cor4: string= readlinesync.question("Digite a quarta cor: ");
let cor5: string= readlinesync.question("Digite a quinta cor: ");

let cores: Array<string> = [cor, cor2, cor3, cor4, cor5];

console.log("As cores escolhidas foram: " + cores);

cores.sort();  

console.log("As cores em ordem alfabética são: " + cores);