addTarefa = () => {
  let input = document.getElementById('tarefa')
  let inputValue = input.value
  let diaSemana = document.getElementById('dias-semana').value
  let divDia = document.querySelector(`div#${diaSemana}`)

  if (inputValue === '') {
    alert('Digite um nome para a tarefa')
  }

  divDia.innerHTML += `<p>${inputValue}</p>`

  input.value = ''
}
