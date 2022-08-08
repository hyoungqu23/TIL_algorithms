function insertionSort(arr) {
  var currentVal;
  for (var i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

insertionSort([2, 1, 9, 76, 4]);

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let currentValue = array[i];

    // 거꾸로 거스르며 정렬된 위치를 찾기
    // 이때 정렬된 부분의 값이 현재값보다 크다면, 이를 복제한다.
    for (let j = i - 1; j >= 0 && array[j] > currentValue; j--) {
      console.log('교환 이전', array, i, j, currentValue, array[j]);
      array[j + 1] = array[j];
      console.log('교환 이후', array, i, j);
    }

    // 현재 값을 정렬된 위치에 삽입하기
    array[j + 1] = currentValue;
    console.log('삽입 이후', array, i, j);
  }
  return array;
};

insertionSort([2, 1, 9, 76, 4]);
