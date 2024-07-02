var isPalindrome = function (x) {
  let split = x.toString().split("");
  let reverse = split.reverse();
  let join = reverse.join("");
  let newVal = Number(join);
  if (x == newVal) {
    return true;
  } else {
    return false;
  }
};
