const notas = [10, 7, 8, 5, 10];
notas.pop()//.pop não aceita nenhum parametro, e ele sempre ira retirar o ultimo elemento do array
console.log(notas)

let media = (notas[0] + notas[1] + notas[2] + notas[3])/ notas.length;

console.log(`a média é: ${media}`);