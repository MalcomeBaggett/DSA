const find_boundary = (arr) => {
  // WRITE YOUR BRILLIANT CODE HERE
  let left = 0;
  let right = arr.length - 1;
  let boundaryIndex = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid]) {
      boundaryIndex = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return boundaryIndex;
};
