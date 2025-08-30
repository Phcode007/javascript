let listaNotas : number[] = Array<number>(8,7,9,6,5,4,3,2,1);

console.log(listaNotas);

listaNotas.push(10);
listaNotas.unshift(0)

console.log(listaNotas);

console.log(listaNotas.includes(2));
console.log(listaNotas.indexOf(2));