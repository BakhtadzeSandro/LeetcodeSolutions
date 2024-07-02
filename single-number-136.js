var singleNumber = function (nums) {
  let obj = {};
  let counter = 1;
  nums.forEach((el) => {
    if (obj.hasOwnProperty(el)) {
      obj[el] = counter + 1;
    } else {
      obj[el] = counter;
    }
  });
  for (const [key, value] of Object.entries(obj)) {
    if (value == 1) {
      return key;
    }
  }
};
