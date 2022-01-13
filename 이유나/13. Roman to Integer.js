const romanToInt = function (s) {
  let sum = 0;
  const hash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] < hash[s[i + 1]]) {
      sum += hash[s[i + 1]] - hash[s[i]];
      i++;
    } else sum += hash[s[i]];
  }
  return sum;
};

console.log(romanToInt('III')); // 3
console.log(romanToInt('LVIII')); // 58
console.log(romanToInt('MCMXCIV')); // 1994
