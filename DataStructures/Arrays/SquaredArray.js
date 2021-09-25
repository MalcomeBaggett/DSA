// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

const sortedSquares = (nums) => {
  let squared = nums.map((el) => {
    return el * el;
  });
  return squared.sort((a, b) => a - b);
};
