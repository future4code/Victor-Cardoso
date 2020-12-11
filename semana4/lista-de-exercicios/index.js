// Exercícios de interpretação de código
// Exercício 1
/*
É declarada uma função que guarda um número digitado pelo usuário para retornar a conversão (multiplicação do argumento x a cotação) em dólar para reais, o valorEmDolar é um argumento da função.
Fora e depois da função tem uma variável que guarda o meuDinheiro, e recebe a função de conversão com o parâmetro valorEmDolar de 100.
Por último imprime o valor da variável meuDinheiro, que é 100 multiplicado pela cotação em dólares
*/

// Exercício 2
/*
É declarada uma função com 2 parâmetros: tipoDeInvestimento e valor, com uma variável declarada para guardar o valorAposInvestimento de acordo com tipoDeInvestimento, a validação do tipoDeInvestimento é feita com switch case para cada caso (poupança, renda fixa, cdb e ações), em cada caso o valorAposInvestimento recebe o argumento valor multiplicado pela porcentagem de cada caso, o default do switch case é um alerta avisando que o tipo de investimento não foi identificado dentro dos casos. A função retorna a variável valorAposInvestimento.
Fora e depois da função duas variáveis para montante são declaradas, novoMontante que recebe a função investeDinheiro com o tipoDeInvestimento Ações e 150 de valor, e segundoMontante que recebe a função investeDinheiro com o tipoDeInvestimento Tesouro Direto e 200 de valor.
Por último imprime no console novoMontante e segundoMontante.
*/

// Exercício 3
/*
São declaradas 3 arrays, numeros, array1 e array2. Apenas a array numeros tem dados gravados.
Depois tem um for of loop de numero, da array números, checkando se cada número é par, se for par, ele dá um push na array1, se for ímpar ele dá push na array2.
Depois imprime no console a quantidade de números de todas as arrays.
*/

// Exercício 4
/*
É declarada uma array numeros com dados gravados, uma variável numero1 que recebe um número infinito posivito, e uma variável numero2 que recebe o valor 0.
Depois um for of loop que percorre a array numeros e checka se o cada numero da array é menor que o valor guardado na variável numero1, se sim, a variável numero1 recebe o valor de numero. Outro if checka se o valor de cada numero é maior que o valor da variavel numero2, se sim, numero2 recebe o valor de numero.
Por último imprime os dois valores de numero1 e numero2.
No valor -10 acredito que o for loop seja interrompido pois numero1 só aceita números positivos.
*/

// Exercícios de Lógica de Programação

// Exercício 1
/*
Pode ser com for loop, for of, forEach e map.
const listaDezenas = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

for (let dezena of listaDezenas) {
  console.log('For of', dezena)
}

listaDezenas.forEach((dezena) => {
  console.log('For Each', dezena)
})

listaDezenas.map((dezena) => {
  console.log('Map', dezena)
})
*/

// Exercício 2
/*
const booleano1 = true
const booleano2 = false
const booleano3 = !booleano2 => true
const booleano4 = !booleano3 => false

a. true && false && true ==> false
b. (true && false) || false ==> (false) || false ==> false
c. (false || true) && (false || true) ==> (true) && (true) ==> true
d. !(false && true) || !(true && true) ==> (false) || (false) ==> false
e. !(true) && !(true) || (!false && true && true) ==> (false) && (false) || (true) ==> true
*/

// Exercício 3
/*
Não funciona por que o while loop fica infinito, é necessário um incremento a cada console.log para que o i aumente e o loop seja interrompido, além disso o loop vai imprimir sempre um número a mais do que o valor de quantidadeDeNumerosPares, então é preciso subtrair 1 a cada iteração.
*/
// Exercício 4
/*
const quantidadeDeNumerosPares = 5
let i = 0
while (i <= quantidadeDeNumerosPares - 1) {
  console.log(i * 2)
  i++
}
*/
// Exercício 5
/*

*/

// Exercícios de Funções

// Exercícios de Objetos

// Exercícios de Funções de array
