/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

let rodada = confirm('Quer iniciar uma nova rodada?')
const carta = comprarCarta()
let usuario
let computador
let pontosUsuario
let pontosComputador

usuario = []
computador = []

// Checka se o usuário quer uma nova rodada
if (rodada === true) {
  // Compra duas cartas pro usuário
  usuario.push(comprarCarta())
  usuario.push(comprarCarta())
  // Soma pontos do usuário
  pontosUsuario = usuario[0].valor + usuario[1].valor
  // Compra duas cartas pro computador
  computador.push(comprarCarta())
  computador.push(comprarCarta())
  //   Soma pontos do computador
  pontosComputador = computador[0].valor + computador[1].valor
  //   Imprime cartas e pontos do usuário
  console.log(
    'Usuário - cartas:',
    usuario[0].texto + ' ' + usuario[1].texto,
    ' - pontuação',
    pontosUsuario
  )
  //   Imprime cartas e pontos do computador
  console.log(
    'Computador - cartas:',
    computador[0].texto + ' ' + computador[1].texto,
    ' - pontuação',
    pontosComputador
  )

  //   Checka e imprime quem ganhou
  let ganhador
  if (pontosUsuario > pontosComputador) {
    ganhador = 'usuário'
    console.log('O ' + ganhador + ' ganhou!')
  } else if (pontosComputador > pontosUsuario) {
    ganhador = 'computador'
    console.log('O ' + ganhador + ' ganhou!')
  } else {
    console.log('Foi um empate! Ninguém ganhou!')
  }
} else {
  console.log('O jogo acabou!')
}
