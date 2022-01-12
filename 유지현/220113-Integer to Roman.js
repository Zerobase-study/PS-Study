const intToRoman = function (num) {
  const symbols = {
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

  let str = "";

  for (const i in symbols) {
    const v = symbols[i];
    while (num >= v) {
      num -= v;
      str += i;
    }
  }

  return str;
};
console.log(intToRoman(3));
console.log(intToRoman(58));
console.log(intToRoman(1994));
