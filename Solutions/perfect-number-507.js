var checkPerfectNumber = function (num) {
  let count = 0;
  for (let i = 0; i < num; i++) {
    if (num % i == 0) {
      count = count + i;
    }
  }
  if (count == num) {
    return true;
  } else {
    return false;
  }
};
