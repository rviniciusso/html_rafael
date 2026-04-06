let tarefa = [
    {nome: 'estudar python'},
    {nome: 'estudar css'},
    {nome: 'estudar js'}
]

tarefa.map((item, index)=>{
    console.log(index,item)
})

const removertarefa = (nome) => {
    const indice = tarefa.findIndex(t => t.nome === nome)

    console.log(indice)
    
    return tarefa.splice(indice, 1)
    
}
removertarefa("estudar python")
console.log(tarefa)

