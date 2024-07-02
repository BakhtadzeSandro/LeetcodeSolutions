var rotateString = function (s, goal) {
  let arr = s.split("");
  for (let i = 0; i < arr.length; i++) {
    let lastEl = arr.pop();
    arr.unshift(lastEl);
    if (arr.join("") == goal) {
      return true;
    }
  }
  return false;
};
