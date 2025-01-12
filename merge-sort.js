function mergeSort(array) {
  if (!Array.isArray(array)) {
    return 'Not an array with 1+ value.';
  }

  if (array.length <= 1) {
    return array;
  }

  function merge(left, right) {
    let countLeft = 0;
    let countRight = 0;
    const merged = [];
    while (countLeft < left.length && countRight < right.length) {
      if (left[countLeft] <= right[countRight]) {
        merged.push(left[countLeft]);
        countLeft++;
      } else {
        merged.push(right[countRight]);
        countRight++;
      }
    }
    return merged
      .concat(left.slice(countLeft))
      .concat(right.slice(countRight));
  }

  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid, array.length);

  return merge(mergeSort(left), mergeSort(right));
}
const arr = [3, 2, 1, 13, 8, 5, 0, 1, 7];
console.log(mergeSort(arr));
