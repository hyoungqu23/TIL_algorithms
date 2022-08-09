// Merge function from earlier
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

// Recrusive Merge Sort
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, sright);
}

mergeSort([10, 24, 76, 73]);

const mergeArray = (array1, array2) => {
  // 반환할 결과 값 배열 선언
  let resultArray = [];

  // counter 선언
  let i = 0;
  let j = 0;

  // 하나의 배열의 마지막에 도달할 때까지 반복
  // 더 작은 요소의 값을 결과 값 배열에 추가
  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      resultArray.push(array1[i]);
      i++;
    } else {
      resultArray.push(array2[j]);
      j++;
    }
  }

  // 첫 번째 배열이 먼저 끝난 경우 두 번째 배열 나머지를 일괄적으로 추가
  while (j < array2.length) {
    resultArray.push(array2[j]);
    j++;
  }

  // 두 번째 배열이 먼저 끝난 경우 첫 번째 배열 나머지를 일괄적으로 추가
  while (i < array1.length) {
    resultArray.push(array1[i]);
    i++;
  }

  return resultArray;
};

const mergeSort = (array) => {
  if (array.length <= 1) return array;
  console.log('total', array);
  let mid = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));
  console.log('left', left);
  console.log('right', right);

  return mergeArray(left, right);
};

mergeSort([10, 24, 76, 73, 1, 33]);
