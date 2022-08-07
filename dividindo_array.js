                //0         2        3         4         5        6       7        8  
const nomes = ['Fidel', 'Gabriel', 'King', 'Matheus', 'Davas', 'Pedro', 'Luis', 'Lopes'];
                           //0 é o indice inicial e para antes do 10
const grupoA = nomes.slice(0,nomes.length/2);
                           //sem indice, pois ele ja vai direto ate o final da divisao do array
const grupoB = nomes.slice(nomes.length/2);

console.log("Tamanho da array:", nomes.length);

console.log(`Alunos do Grupo A: ${grupoA} `);
console.log(`Alunos do Grupo B: ${grupoB} `);