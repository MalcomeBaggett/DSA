function firstNonRepeat(str) {
  // fill this in
  let map = {};

  for (let val of str) {
    if (map[val]) map[val] += 1;
    else {
      map[val] = 1;
    }
  }
  for (let val of str) {
    if (map[val] === 1) {
      return val;
    }
  }
}
