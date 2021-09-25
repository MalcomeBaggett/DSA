const nums = [1, 2, 3, 4, 5, 6];
const numsTwo = [5, 6, 7, 8, 9, 10];

const intersection = (arr, arr2) => {
  let map = {};
  let intersect = [];

  for (val of arr) {
    if (!map[val]) map[val] = val;
  }

  for (val of arr2) {
    if (map[val] && !intersect.includes(val)) {
      intersect.push(val);
    }
  }
  return intersect;
};
