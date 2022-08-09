// Merges two already sorted arrays
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
merge([100, 200], [1, 2, 3, 5, 6]);

const mergeArray = (array1, array2) => {
  // 반환할 결과 값 배열 선언
  let resultArray = [];

  // counter 선언
  let i = 0;
  let j = 0;

  // 하나의 배열의 마지막에 도달할 때까지 반복
  // 더 작은 요소의 값을 결과 값 배열에 추가
  while (i < array1.length && j < array2.length) {
    array1[i] < array2[j]
      ? resultArray.push(array1[i++])
      : resultArray.push(array2[j++]);
  }

  // 첫 번째 배열이 먼저 끝난 경우 두 번째 배열 나머지를 일괄적으로 추가
  if (i >= array1.length) {
    while (j < array2.length) {
      resultArray.push(array2[j]);
      j++;
    }
  }

  // 두 번째 배열이 먼저 끝난 경우 첫 번째 배열 나머지를 일괄적으로 추가
  if (j >= array1.length) {
    while (i < array1.length) {
      resultArray.push(array2[i]);
      i++;
    }
  }

  return resultArray;
};

mergeArray([1, 2, 3, 5, 6], [100, 200]);
