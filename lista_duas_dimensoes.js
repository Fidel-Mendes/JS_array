//                 0       1       2      3
const alunos = ['joao','juliana','caio','ana'];

const mediasAlunos = [10, 7, 9, 6];



//                      indice 0 = [alunos]          indice1 = [10,7,9,6]
let lista_alunos_media = [alunos,                    mediasAlunos];//array com duas dimensões

//                              indice0 = alunos        indice0 do primeiro indice 0 = "joão"
console.log(`${lista_alunos_media     [0]                      [0]}                    ,

sua média é ${lista_alunos_media          [1]                                                   [0]}`)
/*                       indice1 do array de duas dimensões =                        indice0 de mediaAlunos = 10
                                     media 
                                                                                    */

 //resutado no console = joão, sua média é 10

 /*O array lista_alunos_media é um array de duas dimensões. Há 3 arrays dentro dele, e para acessar os valores em funcionarios precisamos de 2 colchetes “[ ] [ ]”. O primeiro colchete será usado para escolher qual dos 3 arrays dentro de funcionarios será acessado. podendo ser:

0 -> alunos
1 -> mediaAlunos
2 -> lista_alunos_media */