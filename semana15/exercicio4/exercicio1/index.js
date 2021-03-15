// Exercício 1a
// Os parâmetros do node são acessados através do console utilizando comandos como: console.log, console.argv, console.error

// Exercício 1b

const nome = process.argv[2];
const idade = process.argv[3];
const frase = `Olá, ${nome}! Você tem ${Number(idade)} anos.`;

if (!process.argv[2] || !process.argv[3]) {
  console.log("Digite 2 parâmetros!".red);
} else {
  console.log(frase.green);
}

// Exercício 1c

const novaIdade = Number(process.argv[3]) + 7;
const novaFrase = `Olá, ${nome}! Você tem ${Number(
  idade
)} anos. Em sete anos você terá ${novaIdade}.`;

if (!process.argv[2] || !process.argv[3]) {
  console.log("Digite 2 parâmetros!".red);
} else {
  console.log(novaFrase.blue);
}
