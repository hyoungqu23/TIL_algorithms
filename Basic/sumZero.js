function sumZero(arr) {
  // 입력 값: 숫자로 구성된 배열
  // 출력 값: 2개의 숫자로 구성된 배열
  // 배열의 각 요소에 대해 해당 요소 이후의 요소들 중
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // 각 요소와 해당 요소 이후 요소의 합이 0인 쌍이면, 그것을 반환
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}
