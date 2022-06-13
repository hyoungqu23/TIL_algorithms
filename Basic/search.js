function search(arr, val) {
  // 입력 값: 배열 1, 찾을 값 1
  // 출력 값: 찾은 값의 index

  // 왼쪽부터 하나씩 이동하며 확인
  for (let i = 0; i < arr.length; i++) {
    // 찾은 값이 있다면 해당 index를 반환
    if (arr[i] === val) return i;
  }

  // 찾은 값이 없을 경우 -1 반환
  return -1;
}
