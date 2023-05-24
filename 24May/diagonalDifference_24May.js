function diagonalDifference(arr) {
  // Write your code here
  //check whether the array is a square matrix
  let diag = [0, 0];
  let size = arr.length - 1;
  for (let i = 0; i < len(arr); i++) {
    diag[0] += arr[i][i];
    diag[1] += arr[i][size - i];
  }
  return Math.abs(diag[0] - diag[1]);
}
