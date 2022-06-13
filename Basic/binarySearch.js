function binarySearch(arr, val) {
  // 입력 값: 배열 1, 찾을 값 1
  // 출력 값: 찾은 값의 index

  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    // 절반으로 나눔
    let mid = Math.floor((min + max) / 2);

    // 절반으로 나눈 지점의 값이 찾는 값이라면 해당 값의 index를 반환
    if (arr[mid] === val) return mid;
    // 찾는 값이 절반으로 나눈 지점의 값이 작다면 오른쪽으로 이동
    else if (arr[mid] < val) min = mid + 1;
    // 찾는 값이 절반으로 나눈 지점의 값이 크다면 왼쪽으로 이동
    else max = mid - 1;
  }

  // 찾는 값이 없을 경우 -1 반환
  return -1;
}
