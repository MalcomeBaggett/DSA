const testArr = [1, 2, 3, 5, 8];

const missingNumbers = (arr) => {
  let missing = [];

  for (let i = 0; i < arr.length; i++) {
    let next = arr[i] + 1;
    if (arr[i + 1] != next) {
      let num = next;
      while (arr[i + 1] > num) {
        missing.push(num);
        num++;
      }
    }
  }
  return missing;
};

console.log(missingNumbers(testArr));
