var majorityElement = function (nums) {
  let obj = {};
  let currentQuantity;
  let maxNumber = 0;
  let answer;
  nums.forEach((el) => {
    if (obj.hasOwnProperty(el)) {
      currentQuantity = obj[el];
      obj[el] = currentQuantity + 1;
    } else {
      obj[el] = 1;
    }
  });
  for (const [key, value] of Object.entries(obj)) {
    if (value > maxNumber) {
      maxNumber = value;
      answer = key;
    }
  }
  return answer;
};
