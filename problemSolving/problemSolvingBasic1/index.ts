const findMinMaxSums = (numbers: number[]): string => {
  if (numbers.length !== 5) {
    console.log("Input array must contain exactly 5 numbers.");
  }

  if (!numbers.every((num) => num >= 1 && num <= 1_000_000_000)) {
    console.log("All numbers must be between 1 and 10^9.");
  }

  const totalSum = numbers.reduce((sum, num) => sum + num, 0);

  const minSum = totalSum - Math.max(...numbers);
  const maxSum = totalSum - Math.min(...numbers);

  return `${minSum} ${maxSum}`;
};


console.log(findMinMaxSums([1,2,3,4,5]))
console.log(findMinMaxSums([1,3,5,7,9]))