// Exercício 1
// imprime 1, 3, 6, 10, ou seja, soma o valor de i com o da variavel valor

// Exercício 2
// a. vai ser impresso todos os números maiores que 18
// b. sim, dá pra fazer o for (let [indice, numero] of lista), e dar console.log no indice a cada iteração

// Exercício 3
// a.

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for (let i = 0; i < 12; i++) {
  const numero = arrayOriginal[i]
  console.log(numero)
}

// b.
// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// for (let i = 0; i < 12; i++) {
//   const numero = arrayOriginal[i]
//   console.log(numero / 10)
// }

// c.
// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let arrayPares = []

// console.log(arrayOriginal)
// for (let i = 0; i < 12; i++) {
//   const numero = arrayOriginal[i]
//   console.log(numero)
//   if (numero % 2 === 0) {
//     arrayPares.push(numero)
//   }
// }
// console.log(arrayPares)

// d.
// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let arrayPares = []

// for (let i = 0; i < 12; i++) {
//   const numero = arrayOriginal[i]
//   console.log('O elemento do índex ', i, 'é ', numero)
// }

// e.
// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let maior = arrayOriginal[0]
// let menor = arrayOriginal[0]

// for (let num of arrayOriginal) {
//   if (num > maior) {
//     maior = num
//   }
//   if (num < menor) {
//     menor = num
//   }
//   console.log(num)
// }
// console.log('O maior número é ', maior, ' e o menor é ', menor)
