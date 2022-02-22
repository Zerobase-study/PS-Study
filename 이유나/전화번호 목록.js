// Hash
function solution(phoneBook) {
  const newSort = phoneBook.sort((a, b) => a - b);
  // [ '119', '97674223', '1195524421' ]
  // [ '123', '456', '789' ]
  // [ '12', '88', '123', '567', '1235' ]

  const map = new Map();

  for (let i = 0; i < newSort.length; i++) {
    const len = newSort[i].length;
    for (let j = i + 1; j < newSort.length; j++) {
      const sliceLen = newSort[j].slice(0, len);

      if (newSort[i] !== sliceLen) {
        map.set(sliceLen, true);
      } else {
        return false;
      }
    }
  }

  return map.size > 0;
}

/*
function solution(phoneBook) {
  const newSort = phoneBook.sort((a, b) => a - b);

  for (let i = 0; i < newSort.length; i++) {
    const len = newSort[i].length;
    for (let j = i + 1; j < newSort.length; j++) {
      const sliceLen = newSort[j].slice(0, len);
      if (newSort[i] === sliceLen) return false;
    }
  }
  return true;
}
*/

console.log(solution(['119', '97674223', '1195524421'])); // false
console.log(solution(['123', '456', '789'])); // true
console.log(solution(['12', '123', '1235', '567', '88'])); // false
