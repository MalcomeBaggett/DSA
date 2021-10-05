const quickSort = (arr) => {
  quickSortHelper(arr, 0, arr.length - 1);
  return arr;
};

const quickSortHelper = (arr, start, end) => {
  if (start >= end) return;
  const pivot = start;
  let leftIdx = start + 1;
  let rightIdx = end;

  while (rightIdx >= leftIdx) {
    if (arr[leftIdx] > arr[pivot] && arr[rightIdx] < arr[pivot]) {
      swap(leftIdx, rightIdx, arr);
    }

    if (arr[leftIdx] <= arr[pivot]) leftIdx++;
    if (arr[rightIdx] >= arr[pivot]) rightIdx--;
  }
  swap(pivot, rightIdx, arr);
  const leftSubArrIsSmaller = rightIdx - 1 - start < end - (rightIdx + 1);
  if (leftSubArrIsSmaller) {
    quickSortHelper(arr, start, rightIdx - 1);
    quickSortHelper(arr, rightIdx + 1, end);
  } else {
    quickSortHelper(arr, rightIdx + 1, end);
    quickSortHelper(arr, start, rightIdx - 1);
  }
};

const swap = (i, j, arr) => {
  let temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
  return arr;
};
