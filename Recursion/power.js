// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(num, powerNum) {
  return powerNum === 0 ? 1 : num * power(num, powerNum - 1);
}
