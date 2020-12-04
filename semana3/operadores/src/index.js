let idadeUsuario = 0
let idadeAmigo = 0

idadeUsuario = prompt('Qual a sua idade?')
idadeAmigo = prompt('Qual a idade do seu melhor amigo(a)?')

console.log(idadeUsuario > idadeAmigo)
console.log(idadeUsuario - idadeAmigo)

let numeroPar = 0

numeroPar = prompt('Escreva um número par')

console.log(numeroPar % 2)

// O padrão é resultar sempre 0
// Se o usuário digitar número ímpar, o resultado do resto da divisão é 1

let listaDeTarefas = []

let tarefa = ''
tarefa = prompt('Escreva uma tarefa realizada')
listaDeTarefas.push(tarefa)
tarefa = prompt('Escreva uma tarefa realizada')
listaDeTarefas.push(tarefa)
tarefa = prompt('Escreva uma tarefa realizada')
listaDeTarefas.push(tarefa)
console.log('Lista de tarefas: ' + listaDeTarefas)
indiceTarefa = prompt('Digite o índice de uma tarefa já realizada (0, 1 ou 2)')
listaDeTarefas.splice('Tarefa realizada: ' + tarefa, 1)
console.log('Lista de tarefas atualizada: ' + listaDeTarefas)

let nomeUsuario = ''
let emailUsuario = ''

nomeUsuario = prompt('Qual seu nome?')
emailUsuario = prompt('Qual seu email?')

console.log(
  `O e-mail ${nomeUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${emailUsuario}!`
)
