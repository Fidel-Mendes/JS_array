const notas = [10,6.5,8,7.5];

let somaNotas = 0;


//callback
notas.forEach(nota =>{
            //nota[i]
    somaNotas += nota 
})

//forEach trabalha comuma funçao dentro do parenteses (.forEach(....))

let media = somaNotas/notas.length;

console.log(media);

//forEach (para cada)
//forEach só executa, não retorna nada