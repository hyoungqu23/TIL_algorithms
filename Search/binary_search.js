// My Solution
const binarySearch = (array, value) => {
  let leftPointer = 0;
  let rightPointer = array.length - 1;
  let middlePointer = Math.floor((leftPointer + rightPointer) / 2);

  for (let i = 0; i < array.length; i++) {
    if (array[leftPointer] === value) return leftPointer;
    if (array[rightPointer] === value) return rightPointer;
    if (array[middlePointer] === value) return middlePointer;

    if (array[middlePointer] < value) {
      leftPointer = middlePointer + 1;
    } else if (array[middlePointer] > value) {
      rightPointer = middlePointer - 1;
    }
    middlePointer = Math.floor((leftPointer + rightPointer) / 2);
  }
  return -1;
};

// Original Solution
function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === elem) {
    return middle;
  }
  return -1;
}

// Refactored Version
function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}

binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 103);

function binarySearch(array, value) {
  let start = 0;
  let end = array.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (array[mid] !== value && start <= end) {
    array[mid] < value ? (start = mid + 1) : (end = mid - 1);
    mid = Math.floor((start + end) / 2);
  }

  return array[mid] === value ? mid : -1;
}
