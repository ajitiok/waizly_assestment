const calculateRatios = (arr: number[]): void => {
  const size = arr.length;

  if (!arr.every((num) => num >= -100 && num <= 100)) {
    console.log("Each number in the array must be between -100 and 100.");
  }

  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;

  for (const num of arr) {
    if (num > 0) {
      positiveCount++;
    } else if (num < 0) {
      negativeCount++;
    } else {
      zeroCount++;
    }
  }

  const positiveRatio = positiveCount / size;
  const negativeRatio = negativeCount / size;
  const zeroRatio = zeroCount / size;

  console.log(positiveRatio.toFixed(6));
  console.log(negativeRatio.toFixed(6));
  console.log(zeroRatio.toFixed(6));
};

const arr = [1, 1, 0, -1, -1];
const arr2 = [-4, 3, -9, 0, 4, 1];
calculateRatios(arr);
calculateRatios(arr2);
