var isPalindrome = function (s) {
  const newStr = s.replace(/[^0-9a-z]/gi, "").toLowerCase();
  let palStr = "";
  for (let i = newStr.length - 1; i >= 0; i--) {
    palStr = palStr + newStr[i];
  }
  if (newStr == palStr) {
    return true;
  } else {
    return false;
  }
};
