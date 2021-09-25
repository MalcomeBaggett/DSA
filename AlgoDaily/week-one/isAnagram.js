let stringOne = "mary";
let stringTwo = "army";

const isAnagram = (s1, s2) => {
  let one = s1.toLowerCase();
  let two = s2.toLowerCase();
  let mapOne = {};
  let mapTwo = {};

  for (val of one) {
    if (mapOne[val]) mapOne[val] += 1;
    else {
      mapOne[val] = 1;
    }
  }
  for (val of two) {
    if (mapTwo[val]) mapTwo[val] += 1;
    else {
      mapTwo[val] = 1;
    }
  }

  for (val of one) {
    if (mapOne[val] !== mapTwo[val]) return false;
  }

  return true;
};
