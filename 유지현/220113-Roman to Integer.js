const romanToInt = function (s) {
  const symbols = {
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
    if (s[i] === "I" && symbols[s[i + 1]] > symbols[s[i]]) {
      sum += -1;
    } else if (s[i] === "X" && symbols[s[i + 1]] > symbols[s[i]]) {
      sum += -10;
    } else if (s[i] === "C" && symbols[s[i + 1]] > symbols[s[i]]) {
      sum += -100;
    } else sum += symbols[s[i]];
  }
  return sum;
};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
