var firstUniqChar = function (s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    result = s[i];
    if (s.replace(s[i], "").includes(s[i])) {
      continue;
    } else {
      return i;
    }
  }
  return -1;
};
