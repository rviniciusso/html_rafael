let tarefas = [];

const atividade = (nome) => {
        tarefas.push(nome)
    };

atividade('atividade redes')
atividade('atividade redes 1')
atividade('atividade redes 3')
atividade('atividade redes 4')
atividade('atividade redes 5')

const buscartarefa = (nome) => {
    const item = tarefas.find((t, index)=>index)
    if (item == undefined){
        return "não encontrou"
    }else{
        return "encontrou"
    }
}

buscartarefa('atividade redes')   

    