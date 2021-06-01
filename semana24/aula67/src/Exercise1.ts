// a.
const printAsc = (int: number) => {
  console.info("Printing Ascendant Numbers");
  if (int >= 0) {
    printAsc(int - 1);
    console.info("Number: ", int);
  }
  console.info("End of function.");
};

// b.
const printDesc = (int: number) => {
  console.info("Printing Descendant Numbers");
  if (int >= 0) {
    console.info("Number: ", int);
    printDesc(int - 1);
  }
  console.info("End of function.");
};

printAsc(5);
printDesc(5);
