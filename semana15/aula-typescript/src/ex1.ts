// Exercício1
// a.
let minhaString: string = "hello world!";

// minhaString = 25
// não é possível atribuir um número à uma variável string
let meuNumero: number | string = 25;
// b. para que a variável aceite string e número basta colocar o operador | também conhecido como "ou"
console.log(minhaString)
console.log(meuNumero)

// c.
type Pessoa = {
  nome: string,
  idade: number,
  corFavorita: string,
}
// d. optei por não utilizar as cores do arco-íris, e sim as nossas cores favoritas reais
enum COR_FAVORITA {
  VICTOR = "Turquesa",
  MARINA = "Lilás",
  CLEO = "Turquesa",
}

const pessoa1: Pessoa = {
  nome: "Victor",
  idade: 25,
  corFavorita: COR_FAVORITA.VICTOR
}

const pessoa2: Pessoa = {
  nome: "Marina",
  idade: 25,
  corFavorita: COR_FAVORITA.MARINA
}

const pessoa3: Pessoa = {
  nome: "Cleo",
  idade: 53,
  corFavorita: COR_FAVORITA.CLEO
}

console.log(`O ${pessoa1.nome}, filho da ${pessoa3.nome} gosta de conversar com a ${pessoa2.nome}.`)

console.log(`A cor preferida da ${pessoa2.nome} é ${COR_FAVORITA.MARINA}.`)

console.log(`A cor preferida do ${pessoa1.nome} é ${COR_FAVORITA.VICTOR}.`)