var isPowerOfTwo = function (n) {
  let result = n / 2;
  if (result == 4 || n == 4 || n == 1 || n == 2) {
    return true;
  } else if ((result > 4 && result < 8) || (n > 2 && n < 8) || n == 0) {
    return false;
  }
  return isPowerOfTwo(result);
};
