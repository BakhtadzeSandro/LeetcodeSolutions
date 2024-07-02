var longestMountain = function (arr) {
  let result = 0;
  let increasing = 0;
  let decreasing = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      if (decreasing > 0) {
        increasing = 0;
      }
      increasing++;
      decreasing = 0;
    } else if (arr[i] < arr[i - 1] && increasing > 0) {
      decreasing++;
      result = Math.max(result, increasing + decreasing + 1);
    } else {
      increasing = 0;
      decreasing = 0;
    }
  }
  return result;
};
