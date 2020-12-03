// Exercício 1
// Serve para testar se um númedo é par, caso seja par, o console imprime "Passou no teste"

// Exercício 2
// a. O código serve para escolher a fruta de acordo com o preço individual de cada fruta
// b. O preço da fruta Maçã é R$2.25
// c. O preço da fruta Pêra é R$5

// Exercício 3
// a. A primeira linha lê o número digitado pelo usuário e o transforma de string para número
// b. Se fosse 10 a mensagem seria Passou no teste + Mensagem secreta, se fosse -10 daria erro pois a variável mensagem foi declarada dentro do bloco if

// Exercício 4
let idadeUsuario = Number(prompt('Qual sua idade?'))

if (idadeUsuario >= 18) {
  console.log('Você pode dirigir')
} else {
  console.log('Você não pode dirigir.')
}

// Exercício 5
let turnoAluno = prompt('Qual turno do dia você estuda?').toUpperCase()

if (turnoAluno === 'M') {
  console.log('Bom Dia!')
} else if (turnoAluno === 'V') {
  console.log('Boa Tarde!')
} else {
  console.log('Boa Noite!')
}

// Exercício 6
let turnoAluno = prompt('Qual turno do dia você estuda?').toUpperCase()

switch (turnoAluno) {
  case 'M':
    console.log('Bom Dia!')
    break
  case 'V':
    console.log('Boa Tarde!')
    break
  case 'N':
    console.log('Boa Noite!')
  default:
    console.log('Olá!')
    break
}

// Exercício 7
let cinema = prompt('Qual o gênero do filme que vamos assistir?').toLowerCase()
let ingresso = Number(prompt('Quanto tá o ingresso?'))
let snack = prompt('Qual snack que você quer comprar?').toLowerCase()

if (ingresso < 15 && cinema === 'fantasia') {
  console.log('Bom filme!')

  // Desafio 1
  switch (snack) {
    case 'pipoca':
      console.log('... com pipoca')
      break
    case 'doces':
      console.log('... com doces')
      break
    case 'refrigerante':
      console.log('... com refrigerante')
      break
    case 'chocolate':
      console.log('... com chocolate')
      break
    default:
      console.log('... com snack!')
  }
} else {
  console.log('Escolha outro filme :(')
}
