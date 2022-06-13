function sumZero(arr) {
  // 입력 값: 숫자로 구성된 배열
  // 출력 값: 2개의 숫자로 구성된 배열

  // 정렬된 배열의 양 끝에서 시작하는 Pointer를 지정
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    // 0이면 쌍을 반환
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      // 0보다 크다면
      // 오른쪽 인덱스를 이동
      right--;
    } else {
      // 0보다 작다면
      // 왼쪽 인덱스를 이동
      left++;
    }
  }
}
