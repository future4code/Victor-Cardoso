const fs = require("fs");

// Exercício 3

// const addTask = (newTask) => {
//   // tasks.push(newTask);
//   // return tasks;
// };

// addTask(process.argv[2]);
// console.log(tasks);

fs.appendFile("tasks.js", process.argv[2], (err) => {
  if (err) throw err;
  // tasks.append(process.argv[2]);
  console.log("Item adicionado à lista");
});
