function sumArray(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}

function multiplyArray(arr, factor) {
  return arr.map((val) => val * factor);
}

module.exports = {
  sumArray,
  multiplyArray,
};
