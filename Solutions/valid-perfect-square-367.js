var isPerfectSquare = function (num) {
  if (num == 1) {
    return true;
  }
  for (let i = 1; i < num; i++) {
    if (i * i == num) {
      return true;
    } else if (i > 2 && i > num / 2) {
      return false;
    }
  }
};
