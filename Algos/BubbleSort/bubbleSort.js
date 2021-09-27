const testArr = [1, 5, 3, 2, 8, 9, 4];

const bubbleSort = (arr) => {
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < arr.length - 2; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        sorted = false;
      }
    }
  }
};

const swap = (arr, x, y) => {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
};
