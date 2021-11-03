const { scan, transpose } = require('./helperFunctions');

const wordSearch = (letters, word) => { 
  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = transpose(horizontalJoin);
  
  if (scan(horizontalJoin, word)) return true;
  if (scan(verticalJoin, word)) return true;

  else return false;
}

module.exports = wordSearch