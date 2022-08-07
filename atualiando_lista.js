const listaDeChamada = ['Fidel', 'Gabriel', 'King', 'Matheus', 'Davas', 'Pedro', 'Luis', 'Lopes'];


//três parametros     indice   elementos que removera        o que vai entrar no lugar(o terceiro necessário não é necessário)
//listaDeChamada.splice(  1,                2,                       'Griffin');
listaDeChamada.splice(2,0,'Griffin');
//apenas atribui em qualquer posição do array sem apagar ninguém 

console.log(`Lista de chamada: ${listaDeChamada}`);

//reforçando

animaisDoAquario = ['🐋', '🐙', '🐬', '🦈'];

animaisDoAquario.splice(1,0,'🐠');
animaisDoAquario.splice(3,2,'🐟');

console.log(animaisDoAquario);