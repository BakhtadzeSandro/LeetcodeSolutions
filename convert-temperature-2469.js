var convertTemperature = function (celsius) {
  let ans = [];
  let kelvin = celsius + 273.15;
  let farenheit = celsius * 1.8 + 32.0;
  ans.push(kelvin, farenheit);
  return ans;
};
