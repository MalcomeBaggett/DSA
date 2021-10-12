const squareRoot = (n) => {
  let left = 0;
  let right = n;
  let result = -1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (Math.floor(mid * mid) <= n) {
      left = mid + 1;
      result = mid;
    } else {
      right = mid - 1;
    }
  }
  return result;
};
