function maxSubarraySum(arr, num) {
  // 입력 값: 숫자로 구성된 배열 하나와 정수 하나
  // 츨력 값: 정수

  // 경계 조건 확인
  // num이 배열의 길이보다 큰 경우에는 null
  if (num > arr.length) return null;

  // 합계 변수 선언(음수로 구성된 배열의 경우 합계도 음수이기 때문)
  let max = -Infinity;

  // 배열의 첫 번째 원소부터
  for (let i = 0; i < arr.length; i++) {
    // 임시 합계 변수 선언
    let temp_max = 0;

    // 배열의 원소부터 n개의 원소의 합
    for (let n = 0; n < num; n++) {
      temp_max += arr[i + n];
    }

    // 임시 합계가 합계 변수에 저장된 값보다 크면 대체함
    if (temp_max > max) max = temp_max;
  }

  return max;
}
