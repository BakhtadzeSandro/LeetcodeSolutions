var lengthOfLastWord = function (s) {
  let str = s.trim();
  let result = 0;
  for (let i = str.length; i > 0; i--) {
    if (str[i] == " ") {
      result = str.length - i - 1;
      break;
    } else {
      result = str.length;
    }
  }
  return result;
};
