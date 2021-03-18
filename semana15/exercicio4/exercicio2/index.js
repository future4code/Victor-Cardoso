// Exercício 2
require("colors");

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
  if (num1 <= 0 || num2 <= 0) {
    console.log("Você não pode dividir um número por 0.".red);
  }
  return Number(num1) / Number(num2);
};

if (!process.argv[2]) {
  console.log("Informe a operação matemática que deseja!".red);
}

if (!process.argv[3] || !process.argv[4]) {
  console.log(
    "Você precisa digitar 2 números para realizar uma operação matemática".red
  );
} else {
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
}
