/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const hash = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };

  const result = [];
  while (num) {
    for (let key in hash) {
      if (num >= hash[key]) {
        result.push(key);
        num -= hash[key];
        break;
      }
    }
  }
  let s = result.join("");
  s = s
    .replace("DCCCC", "CM")
    .replace("CCCC", "CD")
    .replace("LXXXX", "XC")
    .replace("XXXX", "XL")
    .replace("VIIII", "IX")
    .replace("IIII", "IV");
    
  return s;
};

console.log(intToRoman(1994));

// best code
var intToRoman = function (num) {
  let result = "";
  const roman = {
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
  while (num) {
    for (let key in roman) {
      if (num >= roman[key]) {
        result = result + key;
        num -= roman[key];
        break;
      }
    }
  }
  return result;
};
