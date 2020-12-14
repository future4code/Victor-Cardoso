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

const quantidadeDeNumerosPares = 5
let i = 0
while (i <= quantidadeDeNumerosPares - 1) {
  console.log(i * 2)
  i++
}
*/

// Exercício 4
/*
const qualTriangulo = (a, b, c) => {
  if (a === b && b === c) {
    console.log('Triângulo Equilátero!')
    console.log('Lado A', a, 'Lado B', b, 'Lado C', c)
  } else if (a === b || b === c || c === a) {
    console.log('Triângulo Isósceles!')
    console.log('Lado A', a, 'Lado B', b, 'Lado C', c)
  } else {
    console.log('Triângulo Escaleno!')
    console.log('Lado A', a, 'Lado B', b, 'Lado C', c)
  }
}

qualTriangulo(5, 5, 5)
 */

// Exercício 5
/*
const recebeNumeros = (num1, num2) => {
  let maior = 0
  if (num1 > num2) {
    maior = num1
    console.log('O maior é: ', maior)
  } else if (num2 > num1) {
    maior = num2
    console.log('O maior é: ', maior)
  }

  if (num1 % num2 === 0) {
    console.log(`${num1} é divisível por ${num2}`)
  } else {
    console.log(`${num1} não é divisível por ${num2}`)
  }
  if (num2 % num1 === 0) {
    console.log(`${num2} é divisível por ${num1}`)
  } else {
    console.log(`${num2} não é divisível por ${num1}`)
  }

  if (num1 === maior) {
    console.log(`A diferença entre eles é ${num1 - num2}`)
  }
  if (num2 === maior) {
    console.log(`A diferença entre eles é ${num2 - num1}`)
  }
}

recebeNumeros(12, 3)
 */

// Exercícios de Funções
// Exercício 1
// const numeros = [1, 2, 5, 10, 59, 24, 18, 92, 48, 60, 13, 77]
// const imprimeNumeros = (arrayNumeros) => {
//   let maior = 0
//   let menor = 0
//   for (let i = 0; i < arrayNumeros.length; i++) {
//     if (arrayNumeros[i] > maior) {
//       maior = arrayNumeros[i]
//       console.log(maior)
//     }
//   }
//   for (let i = arrayNumeros.length; i >= 1; i--) {
//     if (arrayNumeros[i] < menor) {
//       menor = arrayNumeros[i]
//       console.log(menor)
//     }
//   }
//   console.log(arrayNumeros)
//   console.log(`Maior número do array: ${maior}`)
//   console.log(`Menor número do array: ${menor}`)
// }

// imprimeNumeros(numeros)

// Exercício 2
// const funcaoAlert = () => {
//   alert('Hello Labenu!')
// }

// funcaoAlert()

// Exercícios de Objetos
// Exercício 1
/*
Objetos são maneiras de guardar propriedades em uma variável para que a mesma tenha características e dados de diferentes tipos. 
Podemos usar arrays quando queremos guardar diferentes dados numa mesma variável, de maneira ordenada ou não.
Objetos podem ser utilizados quando precisamos de diferentes propriedades para uma variável, inclusive arrays podem ser propriedades de um objeto.
*/

// Exercício 2
/*
const criaRetangulo = (lado1, lado2) => {
  retangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: 2 * (lado1 + lado2),
    area: lado1 * lado2
  }
  return console.log(retangulo)
}

criaRetangulo(10, 7)
 */

// Exercício 3
/*
const filme = {
  título: 'Interstellar',
  ano: 2014,
  diretor: 'Christopher Nolan',
  elenco: [
    'Matthew MacConaughey',
    'Anne Hathaway',
    'John Lithgow',
    'Ellen Burstyn'
  ]
}

console.log(
  `Venha assistir ao filme ${filme.título}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.elenco}`
)
 */

// Exercício 4
/*
const pessoa = {
  nome: 'Victor',
  idade: 25,
  email: 'cpt.victor@hotmail.com',
  endereco: 'Mogi das Cruzes'
}
console.log(pessoa)

function anonimizarPessoa(pessoaAnonima) {
  pessoaAnonima = pessoa
  pessoaAnonima = {
    nome: 'ANÔNIMO',
    idade: 25,
    email: 'cpt.victor@hotmail.com',
    endereco: 'Mogi das Cruzes'
  }
  return console.log(pessoaAnonima)
}
anonimizarPessoa(pessoa)
 */

// Exercícios de Funções de array

// Exercício 1
/*
const array = [
  { nome: 'Pedro', idade: 20 },
  { nome: 'João', idade: 10 },
  { nome: 'Paula', idade: 12 },
  { nome: 'Artur', idade: 89 }
]

// a.
const adultos = array.filter((adulto) => {
  if (adulto.idade >= 18) {
    return adulto
  }
})

console.log(adultos)

// b.
const criancas = array.filter((crianca) => {
  if (crianca.idade < 20) {
    return crianca
  }
})

console.log(criancas)
*/

// Exercício 2
// const array = [1, 2, 3, 4, 5, 6]
// a.
/*
const dobro = (array) => {
  let arrayDobro = []
  array.forEach((numero) => {
    arrayDobro.push(numero * 2)
  })
  return arrayDobro
}

console.log(dobro(array))
 */

// b.
/*
const triplo = (array) => {
  let arrayTriplo = []
  array.map((numero) => {
    let triplo = numero * 3
    let string = ''
    string = triplo.toString()
    arrayTriplo.push(string)
  })
  return arrayTriplo
}
console.log(triplo(array))
 */

// c.
/*
const strings = (array) => {
  let arrayStrings = []

  array.map((numero) => {
    let par = ''
    let impar = ''
    if (numero % 2 === 0) {
      par = `${numero} é par`
      arrayStrings.push(par)
    } else {
      impar = `${numero} é ímpar`
      arrayStrings.push(impar)
    }
  })
  return arrayStrings
}
console.log(strings(array))
 */

// Exercício 3
/*
const pessoas = [
  { nome: 'Paula', idade: 12, altura: 1.8 },
  { nome: 'João', idade: 20, altura: 1.3 },
  { nome: 'Pedro', idade: 15, altura: 1.9 },
  { nome: 'Luciano', idade: 22, altura: 1.8 },
  { nome: 'Artur', idade: 10, altura: 1.2 },
  { nome: 'Soter', idade: 70, altura: 1.9 }
]
 */
// a.
/*
const permissaoEntrada = (pessoas) => {
  let pessoasComPermissao = []
  pessoas.filter((pessoa) => {
    if (pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura > 1.5) {
      pessoasComPermissao.push(pessoa)
    }
  })
  return console.log(`Lista de autorizados: `, pessoasComPermissao)
}

permissaoEntrada(pessoas)
 */

// b.
/*
const naoAutorizados = (pessoas) => {
  let pessoasNaoAutorizadas = []
  pessoas.filter((pessoa) => {
    if (pessoa.idade < 14 || (pessoa.idade > 60 && pessoa.altura > 1.5)) {
      pessoasNaoAutorizadas.push(pessoa)
    }
  })
  return console.log(`Lista de não autorizados: `, pessoasNaoAutorizadas)
}

naoAutorizados(pessoas)
 */

// Exercício 4
/*
const consultas = [
  {
    nome: 'João',
    genero: 'masculino',
    cancelada: true,
    dataDaConsulta: '01/10/2019'
  },
  {
    nome: 'Pedro',
    genero: 'masculino',
    cancelada: false,
    dataDaConsulta: '02/10/2019'
  },
  {
    nome: 'Paula',
    genero: 'feminino',
    cancelada: true,
    dataDaConsulta: '03/11/2019'
  },
  {
    nome: 'Márcia',
    genero: 'feminino',
    cancelada: false,
    dataDaConsulta: '04/11/2019'
  }
]

const emailConsulta = (lista) => {
  let emails = []
  let pronomeTratamento = ''
  let lembrar = ''
  let email = ''

  lista.filter((paciente) => {
    if (paciente.genero === 'masculino') {
      pronomeTratamento = 'Sr.'
      lembrar = 'lembrá-lo'
    }
    if (paciente.genero === 'feminino') {
      pronomeTratamento = 'Sra.'
      lembrar = 'lembrá-la'
    }
    if (paciente.cancelada === true) {
      email = `Olá, ${pronomeTratamento} ${paciente.nome}. Estamos enviando esta mensagem para ${lembrar} da sua consulta no dia ${paciente.dataDaConsulta}. Por favor, acuse
      o recebimento deste e-mail.`

      emails.push(email)
      // console.log(email)
    }
  })
  return console.log('Consultas marcadas: ', emails)
}

const emailCancelados = (pacientes) => {
  let emails = []
  let pronomeTratamento = ''
  let email = ''

  pacientes.filter((paciente) => {
    if (paciente.genero === 'masculino') {
      pronomeTratamento = 'Sr.'
    }
    if (paciente.genero === 'feminino') {
      pronomeTratamento = 'Sra.'
    }
    if (paciente.cancelada === false) {
      email = `Olá, ${pronomeTratamento} ${paciente.nome}. Infelizmente, sua consulta marcada
      para o dia ${paciente.dataDaConsulta} foi cancelada. Se quiser, pode entrar em
      contato conosco para remarcá-la`

      emails.push(email)
    }
  })
  return console.log('Consultas canceladas: ', emails)
}

emailConsulta(consultas)
emailCancelados(consultas)
*/

// Exercício 5
const contas = [
  { cliente: 'João', saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: 'Paula', saldoTotal: 7500, compras: [200, 1040] },
  { cliente: 'Pedro', saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: 'Luciano', saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: 'Artur', saldoTotal: 1800, compras: [200, 300] },
  { cliente: 'Soter', saldoTotal: 1200, compras: [] }
]

const atualizaSaldo = (listaClientes) => {
  let listaAtualizada = []

  listaAtualizada = contas
  // forEach no array de contas
  listaClientes.forEach((saldoCliente) => {
    let saldoAtualizado = 0

    // mapeia array de compras, subtrai valor de compras do saldo
    saldoCliente.compras.map((compra, index) => {
      saldoAtualizado = saldoCliente.saldoTotal - compra
      console.log(saldoAtualizado)
    })

    saldoCliente.saldoTotal = saldoAtualizado
    return saldoAtualizado
  })
  console.log(listaAtualizada)
}

atualizaSaldo(contas)
/*

*/
