function validAnagram(str1, str2) {
  // 입력 값: 문자열 1, 문자열 2
  // 출력 값: isAnagram Boolean

  // 입력 값과 출력 값의 길이가 다른 경우
  if (str1.length !== str2.length) return false;

  // Frequency Counter 객체 생성
  let str1Frequency = {};
  let str2Frequency = {};

  // 문자열 1의 문자들의 빈도수를 저장
  for (let char of str1) {
    str1Frequency[char] = (str1Frequency[char] || 0) + 1;
  }
  // 문자열 2의 문자들의 빈도수를 저장
  for (let char of str2) {
    str2Frequency[char] = (str2Frequency[char] || 0) + 1;
  }

  for (let keyChar in str1Frequency) {
    // 문자열 1의 key들이 문자열 2의 key에도 존재하는지 확인
    if (!(keyChar in str2Frequency)) return false;

    // 문자열 1의 key의 value가 문자열 2의 key의 value와 같은지 확인
    if (str1Frequency[keyChar] !== str2Frequency[keyChar]) return false;
  }
  return true;
}
