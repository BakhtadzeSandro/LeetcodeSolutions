var twoSum = function (nums, target) {
  let num1;
  let num2;
  let res = [];
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        let num1 = i;
        let num2 = j;
        if (i != j) {
          res.push(num1, num2);
          return res;
        }
      }
    }
  }
};
