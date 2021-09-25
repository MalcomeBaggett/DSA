// Given a binary array nums, return the maximum number of consecutive 1's in the array.
// Input: nums = [1,1,0,1,1,1]
// Output: 3
const findMaxConsecutiveOnes = (nums) => {
  let max = 0;
  let temp = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 1) {
      console.log("not one", max, temp);
      temp = 0;
      max = Math.max(temp, max);
    }
    if (nums[i] === 1) {
      temp += 1;
      console.log("one", max, temp);
      max = Math.max(temp, max);
    }
  }
  return max;
};
