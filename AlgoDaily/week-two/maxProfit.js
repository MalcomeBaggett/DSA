const testArr = [5, 20, 15, 13, 3, 15, 5, 10];

const maxProfits = (arr) => {
  let maxProfit = -Infinity;
  let currMax = -Infinity;

  for (let i = arr.length - 1; i >= 0; i++) {
    let currVal = arr[i];
    currMax = Math.max(currVal, currMax);
    let currProfit = currMax - currVal;
    maxProfit = Math.max(currMax, maxProfit);
  }
  return maxProfit;
};
