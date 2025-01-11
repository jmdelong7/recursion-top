function fibs(num) {
  const arr = [];
  for (let i = 0; i <= num - 1; i++) {
    console.log(`This was printed recursively, ${i}`);
    if (i === 0 || i === 1) {
      arr.push(i);
    } else {
      arr.push(arr[i - 2] + arr[i - 1]);
    }
  }
  return arr;
}

function fibsRec(num, arr = [0, 1]) {
  console.log('This was printed recursively');
  if (num <= 2) return arr;
  const sum = arr[arr.length - 2] + arr[arr.length - 1];
  arr.push(sum);
  return fibsRec(num - 1, arr);
}
