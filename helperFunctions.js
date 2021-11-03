const scan = (arr, word) => {
  for (l of arr) {
    if (l.includes(word)) return true
  }
};

const transpose = function(matrix) {
  let newMatrix = [];
  for (let i = 0; i < matrix[0].length; i++) {
    newMatrix.push([]);
  }
  for (let j = 0; j < newMatrix.length; j++) {
    for (let k = 0; k < matrix.length; k++) {
      newMatrix[j].push(matrix[k][j]);
    }
  }
  return newMatrix;  
};

module.exports = {
  scan,
  transpose,
}