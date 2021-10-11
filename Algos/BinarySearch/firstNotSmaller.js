const firstNotSmaller = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  let boundary = -1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] >= target) {
      boundary = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return boundary;
};
