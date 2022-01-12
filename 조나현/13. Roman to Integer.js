/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const hash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const exception = {
    IV: hash["V"] - hash["I"],
    IX: hash["X"] - hash["I"],
    XL: hash["L"] - hash["X"],
    XC: hash["C"] - hash["X"],
    CD: hash["D"] - hash["C"],
    CM: hash["M"] - hash["C"],
  };
  let sum = 0;
  for (let key in exception) {
    let regex = new RegExp(`${key}`, "g");
    let match = s.match(regex);
    if (match) {
      sum += exception[key] * match.length;
      s = s.replace(key, "");
    }
  }

  for (let i = 0; i < s.length; i++) {
    sum += hash[s[i]];
  }
  return sum;
};

console.log(romanToInt("MCMXCIV"));

// best code
var romanToInt = function (s) {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (roman[s[i]] < roman[s[i + 1]]) {
      sum -= roman[s[i]];
    } else {
      sum += roman[s[i]];
    }
  }
  return sum;
};
