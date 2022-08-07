// Optimized BubbleSort with noSwaps
function bubbleSort(arr) {
  var noSwaps;
  for (var i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);

const optimizedBubbleSort = (array) => {
  for (let i = array.length - 1; i >= 0; i--) {
    let isSwap = false;
    for (let j = 0; j < i; j++) {
      console.log(array, array[j], array[j + 1]);
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        isSwap = true;
      }
    }
    if (!isSwap) break;
  }
  return array;
};

optimizedBubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);
