// Exercício 1a
// Os parâmetros do node são acessados através do console utilizando comandos como: console.log, console.argv, console.error

// Exercício 1b

const nome = "Victor";
const idade = 25;
const frase = `Olá, ${nome}! Você tem ${idade} anos.`;

// console.log(frase);

// Exercício 1c

const novaIdade = idade + 7;
const novaFrase = `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}.`;

// console.log(novaFrase);

// Exercício 2

const sum = (num1, num2) => {
  return Number(num1) + Number(num2);
};
const sub = (num1, num2) => {
  return Number(num1) - Number(num2);
};
const mult = (num1, num2) => {
  return Number(num1) * Number(num2);
};
const div = (num1, num2) => {
  return Number(num1) / Number(num2);
};

switch (process.argv[2]) {
  case "sum":
    return console.log("sum result", sum(process.argv[3], process.argv[4]));
  case "sub":
    return console.log("sub result", sub(process.argv[3], process.argv[4]));
  case "mult":
    return console.log("mult result", mult(process.argv[3], process.argv[4]));
  case "div":
    return console.log("div result", div(process.argv[3], process.argv[4]));
}

// Exercício 3
const tasks = [];

const addTask = (newTask) => {
  tasks.push(newTask);
  return tasks;
};

addTask(process.argv[2]);
console.log(tasks);
