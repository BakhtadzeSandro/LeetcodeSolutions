var addDigits = function (num) {
  let startingNum = num;
  let arr = String(startingNum).split("");
  let currentResult = 0;
  for (let i = 0; i < arr.length; i++) {
    currentResult = currentResult + Number(arr[i]);
  }
  if (String(currentResult).split("").length == 1) {
    return currentResult;
  }
  return addDigits(currentResult);
};
