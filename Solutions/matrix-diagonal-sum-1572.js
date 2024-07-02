var diagonalSum = function (mat) {
  let length = mat.length;
  let result = 0;
  for (let i = 0; i < length; i++) {
    result = result + mat[i][i] + mat[i][length - i - 1];
  }
  if (length % 2 != 0) {
    let index = Math.floor(length / 2);
    result = result - mat[index][index];
  }
  return result;
};
