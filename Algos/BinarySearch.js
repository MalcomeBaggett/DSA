const search = function (nums, target) {
  let right = nums.length - 1;
  let left = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let value = nums[mid];
    if (value === target) return mid;
    if (value < target) left = mid + 1;
    else {
      right = mid - 1;
    }
  }

  return -1;
};
