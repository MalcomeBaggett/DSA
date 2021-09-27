const isPalindrome = (str) => {
  let string = str.toLowerCase();
  let left = 0;
  let right = string.length - 1;

  while (left < right) {
    if (string[left] === " ") left++;
    if (string[right] === " ") right--;
    if (string[left] !== string[right]) return false;
    right--;
    left++;
  }
  return true;
};
