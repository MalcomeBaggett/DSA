const lonelyNumber = (numbers) => {
  let map = {};
  for (let val of numbers) {
    if (map[val]) map[val] += 1;
    else {
      map[val] = 1;
    }
  }

  for (let val of numbers) {
    if (map[val] == 1) return val;
  }
  return numbers;
};
