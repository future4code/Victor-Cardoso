// Exercício 2:

// a. a entrada é um array de números, e a saída é esse array ordenado por maior, menor ou pela média de todos os números da lista


type amostra = {
  numeros: number[],
  obterEstatisticas: (numeros: number[]) => number
}

// b. as variáveis numeros e numerosOrdenados são um array de number,
// todas as outras são apenas números

function obterEstatisticas(numeros: number[]) {

  const numerosOrdenados = numeros.sort(
      (a, b) => a - b
  )

  let soma = 0

  for (let num of numeros) {
      soma += num
  }

  const estatisticas = {
      maior: numerosOrdenados[numeros.length - 1],
      menor: numerosOrdenados[0],
      media: soma / numeros.length
  }

  return estatisticas
}

