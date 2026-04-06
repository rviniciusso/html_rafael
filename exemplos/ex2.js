let tarefas = [
    {nome: "estudar JS"},
    {nome: "treinar Lógica"}
];

tarefas.push({nome: "estudar CSS"});

let resultado = tarefas.find(t => t.nome === "estudar CSS");

console.log(tarefas);
console.log(resultado);