const notas = [10,9,8,7,6];
//                      função callback
const notasAtualizadas = notas.map( nota => nota == 10 ? nota : ++nota);
//                                 função
console.log(notasAtualizadas);
//.map() retorna os dados depois de sua execução apos salvar os dados em uma nova variavel