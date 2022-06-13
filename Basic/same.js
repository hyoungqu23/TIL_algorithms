function same(arr1, arr2) {
  // 입력 값: 배열1, 배열2
  // 출력 값: isSame Boolean

  // 경계 조건 확인
  // 두 배열의 길이가 다르면 false
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Frequency Counter 객체 선언
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  // 배열 1의 요소의 빈도 수를 객체에 저장
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  // 배열 2의 요소의 빈도 수를 객체에 저장
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  // 배열 1 요소 빈도 수와 배열 2 요소 빈도 수를 비교
  // 단, 배열 1의 요소의 제곱과 배열 2의 요소를 비교
  for (let key in frequencyCounter1) {
    // 배열 1의 요소의 제곱이 배열 2에 존재하지 않으면 false
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }

    // 배열 1의 요소의 제곱이 배열 2에 존재하나 빈도 수가 다르면 false
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]);
