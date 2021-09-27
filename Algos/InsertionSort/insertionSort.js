const testArr = [1, 5, 3, 2, 8, 9, 4];

const insertionSort = (arr) => {
  for (let i = 1; i <= array.length - 1; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      swap(array, j, j - 1);
      j -= 1;
    }
  }
  return array;
};

const swap = (arr, x, y) => {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
};
