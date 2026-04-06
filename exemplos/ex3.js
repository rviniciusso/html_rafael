let tarefas = [
    {nome: "estudar JS", concluida: true},
    {nome: "treinar Lógica", concluida: false}
];

tarefas.push({nome: "estudar CSS"});

let concluida = tarefas.filter(t => t.concluida);

console.log(tarefas);
console.log(concluida);