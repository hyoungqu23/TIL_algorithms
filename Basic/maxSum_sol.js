function maxSubarraySum(arr, num) {
  // 입력 값: 숫자로 구성된 배열 하나와 정수 하나
  // 츨력 값: 정수

  // 경계 조건 확인
  // num이 배열의 길이보다 큰 경우에는 null
  if (num > arr.length) return null;

  // 합계 변수, 임시 합계 변수 선언
  let maxSum = 0;
  let tempSum = 0;

  // 배열의 첫 번째 원소부터 n번째 요소까지의 합
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  // 해당 합계를 임시 합계 변수에 할당
  tempSum = maxSum;

  // n개의 원소 중 첫 번째 원소를 제외하고, n+1번째 요소를 추가하면서 합계를 계산
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];

    // 둘 중 큰 값을 선택
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
