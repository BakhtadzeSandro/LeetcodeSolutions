var fib = function (n) {
  if (n == 0) {
    return 0;
  }
  let arr = [1, 1];
  for (let i = 2; i < n; i++) {
    let currentNumber = arr[i - 1] + arr[i - 2];
    arr.push(currentNumber);
  }
  let maximumIndex = arr.length - 1;
  return arr[maximumIndex];
};
