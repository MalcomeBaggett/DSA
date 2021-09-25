let test = "tacoc";
const reverse = (string) => {
  let newString = "";

  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }

  return newString;
};

const reverseAlt = (string) => {
  let left = 0;
  let right = string.length - 1;
  let newString = string.split("");

  const swap = (arr, a, b) => {
    temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    return arr;
  };

  while (left < right) {
    swap(newString, left, right);
    left++;
    right--;
  }

  return newString.join("");
};
