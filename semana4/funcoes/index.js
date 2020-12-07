// EXERCÍCIO 1
// a. Vai ser impresso 10 no console
// b. se tirar os dois console.log não vai imprimir nada no console

// EXERCÍCIO 2
// a. Vai ser Darvas e Caio
// b. Vai ser impresso Amanda e Caio apenas

// EXERCÍCIO 3
// A função multiplica ao quadrado todo index da array que seja par e adiciona no fim da array o número
// Um nome bom seria indexParQuadrado

// EXERCÍCIO 4
// a.
// mensagemA = () => {
//   console.log(
//     'Eu sou o Victor, tenho 25 anos, moro em Mogi das Cruzes e sou estudante.'
//   )
// }

// mensagemA()

// b.
// mensagemB = (nome, idade, endereco, estuda) => {
//   let estudante = ''

//   if (estuda === true) {
//     estudante = 'sou'
//   } else {
//     estudante = 'não sou'
//   }

//   let frase = `Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e ${estudante} estudante.`

//   return console.log(frase)
// }

// mensagemB('Victor', 25, 'Mogi das Cruzes', true)

// EXERCÍCIO 5
// a.
// soma = (num1, num2) => {
//   return num1 + num2
// }

// console.log(soma(210, 210))

// b.
// primeiroBooleano = (num1, num2) => {
//   let maior

//   if (num1 >= num2) {
//     maior = true
//   } else {
//     maior = false
//   }

//   return maior
// }

// console.log(primeiroBooleano(10, 9))
// console.log(primeiroBooleano(10, 11))

// c.
// dezVezes = (mensagem) => {
//   for (let i = 0; i < 10; i++) {
//     console.log(mensagem)
//   }
// }

// dezVezes('Oie')

// EXERCÍCIO 6
// a.
// const arrayTeste = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// funcaoTamanho = (array) => {
//   return array.length
// }

// const tamanhoArray = funcaoTamanho(arrayTeste)
// console.log(tamanhoArray)

// b.
// checkaPar = (numero) => {
//   if (numero % 2 === 0) {
//     return true
//   } else {
//     return false
//   }
// }

// console.log(checkaPar(11))
// console.log(checkaPar(10))

// c.
// qtdNumPar = (array) => {
//   let arrayPares = []
//   for (item of array) {
//     if (item % 2 === 0) {
//       arrayPares.push(item)
//     }
//   }
//   return arrayPares.length
// }

// console.log(qtdNumPar(arrayTeste))

// d.
// qtdNumPar = (array) => {
//   let arrayPares = []
//   for (item of array) {
//     if (checkaPar(item) === true) {
//       arrayPares.push(item)
//     }
//   }
//   return arrayPares.length
// }

// console.log(qtdNumPar(arrayTeste))
