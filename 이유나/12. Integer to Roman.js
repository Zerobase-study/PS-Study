const intToRoman = function (num) {
  let result = '';

  const hash = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let n = num;
  for (const key in hash) {
    // if (Object.prototype.hasOwnProperty.call(hash, key)) {
    if (hash.hasOwnProperty.call(hash, key)) {
      while (hash[key] <= n) {
        result += key;
        n -= hash[key];
      }
    }
  }

  return result;
};

console.log(intToRoman(3)); // "III"
console.log(intToRoman(58)); // "LVIII"
console.log(intToRoman(1994)); // "MCMXCIV"
