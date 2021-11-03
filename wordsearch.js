const wordSearch = (letters, word) => { 
  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = transpose(horizontalJoin);
  
  if (scan(horizontalJoin, word)) return true;
  if (scan(verticalJoin, word)) return true;

  else return false;
}

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

module.exports = wordSearch