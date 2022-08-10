function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); //3
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}
quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]);

// [4,6,9,1,2,5,3]
// [3,2,1,4,6,9,5]
//        4
//  3,2,1    6,9,5
//      3      6
//  2,1      5  9
//    2
//  1

const pivot = (array, start = 0, end = array.length - 1) => {
  // 첫 번째 요소를 Pivot으로 설정.
  let pivotIndex = start;
  let pivot = array[pivotIndex];

  // Pivot 이후의 요소 중 작은 것은 좌측, 큰 것은 우측에 재배치.
  for (let i = start + 1; i <= end; i++) {
    if (pivot > array[i]) {
      pivotIndex++;
      [array[pivotIndex], array[i]] = [array[i], array[pivotIndex]];
    }
  }

  // Pivot을 올바른 위치로 이동.
  [array[start], array[pivotIndex]] = [array[pivotIndex], array[start]];

  // Pivot의 index를 반환.
  return pivotIndex;
};

const quickSort = (array, left = 0, right = array.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(array, left, right); // 3

    console.log('left', left, 'right', right, 'pivotIndex', pivotIndex);
    // left
    quickSort(array, left, pivotIndex - 1);
    // right
    quickSort(array, pivotIndex + 1, right);
  }

  return array;
};

quickSort([4, 6, 9, 1, 2, 5, 3]);
quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]);
