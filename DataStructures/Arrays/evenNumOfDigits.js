// Given an array nums of integers, return how many of them contain an even number of digits.

var findNumbers = function (nums) {
  let count = 0;
  for (val of nums) {
    if (val.toString().length % 2 === 0) count++;
  }
  return count;
};
