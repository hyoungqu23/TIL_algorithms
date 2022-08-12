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

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

radixSort([23, 345, 5467, 12, 2345, 9852]);

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

const digitCount = (number) => {
  if (number === 0) return 1;
  return Math.floor(Math.log10(Math.abs(number))) + 1;
};

const mostDigits = (array) => {
  const digitArray = array.map((number) => digitCount(number));
  return Math.max(...digitArray);
};

const radixSort = (array) => {
  // 배열의 요소 중 자릿수가 제일 큰 값의 자릿수
  const maxDigitCount = mostDigits(array);

  // 최대 자릿수까지 반복하며 정렬
  for (let k = 0; k < maxDigitCount; k++) {
    // 자릿수별로 하위 배열을 분할하고 하나의 배열에 저장
    const digitBuckets = Array.from({ length: 10 }, () => []);

    // 주어진 배열을 순회하며 자릿수별로 정렬
    for (let i = 0; i < array.length; i++) {
      const digit = getDigit(array[i], k);
      digitBuckets[digit].push(array[i]);
    }

    // 자릿수별로 정렬된 배열을 합침
    array = [].concat(...digitBuckets);
  }
  return array;
};
