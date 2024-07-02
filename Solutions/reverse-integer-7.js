var reverse = function (x) {
  let str = String(x);
  let arr = str.split("");
  let newNum = "";
  let start = 0;
  if (arr[0] == "-") {
    newNum = "-";
    for (let i = arr.length - 1; i > 0; i--) {
      newNum = newNum + arr[i];
    }
    if (newNum > Math.pow(2, 31) - 1 || newNum < Math.pow(-2, 31)) {
      return 0;
    } else {
      return Number(newNum);
    }
  } else if (arr[arr.length - 1] == 0) {
    arr.reverse();
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        start = i;
        break;
      }
    }
    for (let i = start; i < arr.length; i++) {
      newNum = newNum + arr[i];
    }
    if (newNum > Math.pow(2, 31) - 1 || newNum < Math.pow(-2, 31)) {
      return 0;
    } else {
      return Number(newNum);
    }
  } else {
    arr.reverse();
    for (let i = 0; i < arr.length; i++) {
      newNum = newNum + arr[i];
    }
    if (newNum > Math.pow(2, 31) - 1 || newNum < Math.pow(-2, 31)) {
      return 0;
    } else {
      return Number(newNum);
    }
  }
};
