var intersection = function (nums1, nums2) {
  let result = [];
  for (let value of nums1) {
    for (let num of nums2) {
      if (value == num) {
        result.push(value);
      }
    }
  }
  let newArr = new Set(result);
  return Array.from(newArr);
};
