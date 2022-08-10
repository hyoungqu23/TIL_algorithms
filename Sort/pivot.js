// First Version
function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  var pivot = arr[start];
  var swapIdx = start;

  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

// Version with ES2015 Syntax
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

pivot([4, 8, 2, 1, 5, 7, 6, 3]);

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

pivot([4, 8, 2, 1, 5, 7, 6, 3]);

// Tracking Array

// (i = 1) [4, 8, 2, 1, 5, 7, 6, 3]
// (i = 2) [4, 2, 8, 1, 5, 7, 6, 3]
// (i = 3) [4, 2, 1, 8, 5, 7, 6, 3]
// (i = 4) [4, 2, 1, 8, 5, 7, 6, 3]
// (i = 5) [4, 2, 1, 8, 5, 7, 6, 3]
// (i = 6) [4, 2, 1, 8, 5, 7, 6, 3]
// (i = 7) [4, 2, 1, 8, 5, 7, 6, 3]
// (i = 8) [4, 2, 1, 3, 5, 7, 6, 8]
// after Loop [3, 2, 1, 4, 5, 7, 6, 8]
// return 3;
