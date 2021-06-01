const calculateSum = (int: number, sum: number = 0): number => {
  if (int === 0) {
    return sum;
  }
  console.info("Sum: ", sum);
  console.info("Current number to sum: ", int - 1);
  return calculateSum(int - 1, int + sum);
};

console.info("Sum: ", calculateSum(5));
