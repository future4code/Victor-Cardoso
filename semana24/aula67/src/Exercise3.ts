const calculateSumWithFor = (int: number): number => {
  let sum = 0;
  for (let i = 0; i <= int; i++) {
    sum += i;
    console.info("Index: ", i);
    console.info("Integer to sum: ", int);
    console.info("Summed total: ", sum);
  }
  return sum;
};

console.info("Final total: ", calculateSumWithFor(5));
