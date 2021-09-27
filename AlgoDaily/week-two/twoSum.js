const twoSum = (arr, goal) => {
  const results = [];
  // define this method
  let map = {};

  for (let i = 0; i <= arr.length - 1; i++) {
    if (!map[arr[i]]) map[arr[i]] = i;
  }

  for (let i = 0; i <= arr.length - 1; i++) {
    let sum = goal - arr[i];
    if (map[sum]) {
      results.push(i);
      results.push(map[sum]);
    }
  }
  return results;
};
