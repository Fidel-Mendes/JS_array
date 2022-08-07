const alunos = ['joao','juliana','caio','ana','gabriel','matheus'];

const mediasAlunos = [10, 7, 9, 6, 0, "incompetente"];

let lista_alunos_media = [alunos, mediasAlunos];

const exibeNomeNota = (nomeAluno) => {
    if (lista_alunos_media[0].includes(nomeAluno)){
        let indice = lista_alunos_media[0].indexOf(nomeAluno)

//                               [0][3]
        return lista_alunos_media[0][indice] + ', sua média é: ' + lista_alunos_media[1][indice];
    }else{
        return "Aluno não cadastrado";
    }
}

console.log(exibeNomeNota("matheus"));

// includes = inclui (busca dentro do array o dado solicitado) includes sempre retorna booleano
// indexOf = qual numero do indice selecionado (ana), indexOf retorna numero (indice)

