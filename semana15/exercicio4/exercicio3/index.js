const tasks = require("./tasks");

const fs = require("fs");

// Exercício 3

const tarefas = ["teste"];

const addTask = (newTask) => {
  console.log(newTask);
  tarefas.push(newTask);
  // fs.appendFile("tasks.js", newTask, (err) => {
  //   if (err) throw err;
  //   console.log("Item adicionado à lista");
  // });
  return tasks;
};

addTask(process.argv[2]);
console.log(tarefas);
