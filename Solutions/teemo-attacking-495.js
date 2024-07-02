var findPoisonedDuration = function (timeSeries, duration) {
  let counter = 0;
  for (let i = 0; i < timeSeries.length - 1; i++) {
    if (timeSeries[i + 1] - timeSeries[i] < duration) {
      counter = counter + (timeSeries[i + 1] - timeSeries[i]);
    } else {
      counter = counter + duration;
    }
  }
  return counter + duration;
};
