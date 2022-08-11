function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

mostDigits([23, 567, 89, 12234324, 90]);

const getDigit = (number, index, base = 10) => {
  return Math.floor(Math.abs(number) / Math.pow(base, index)) % base;
};

getDigit(123, 0);
getDigit(123, 1);
getDigit(123, 2);

const digitCount = (number) => {
  if (number === 0) return 1;
  return Math.floor(Math.log10(Math.abs(number))) + 1;
};

const mostDigits = (array) => {
  const digitArray = array.map((number) => digitCount(number));
  return Math.max(...digitArray);
};
