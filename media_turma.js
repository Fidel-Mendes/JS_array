const salaJS = [7,8,8,7,10,6.5,4,10,7];
const salaJava = [6,5,8,9,5,6];
const salaPython = [7,3.5,8,9.5];

function mediaSala(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acumulador, atual) => atual + acumulador,0) //o ero é o numero inicial que sera acumulado as notas do array
    return somaDasNotas/notasDaSala.length
}

console.log(`A média da sala de JavaScript é: ${mediaSala(salaJS)}`);
console.log(`A média da sala de JavaScript é: ${mediaSala(salaJava)}`);
console.log(`A média da sala de JavaScript é: ${mediaSala(salaPython)}`);

// no metodo reduce sempre necessita dos parametros acum e atual




//media de alunos com reduce (exercicio da primeira aula resolvida)

const notas = [10,6.5,8,7];

const media = notas.reduce((acum,atual) => atual + acum,0) / notas.length;

console.log(media);