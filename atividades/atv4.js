let tarefas = [];

const atividade = (nome) => {
        tarefas.push(nome)
    };


atividade({nome: 'artista'})
atividade({nome: 'engenheiro'})
atividade({nome: 'programador'})
atividade({nome: 'programador'})

tarefas.map((item, index)=>{
    console.log(index,item)
})


const buscarindice = (indice) => {

    const tamanho = tarefas.length
    if(indice+1>tamanho){
        return "Índice Inválido"
    }else{
        return tarefas[indice]
    }
}

console.log(buscarindice(3))




    

    