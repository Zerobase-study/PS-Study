const cursor = function (arr) {
  let min = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    let next = i + 1;
    while (next < arr.length && arr[next].charCodeAt(0) === 65) {
      next++;
    }

    min = Math.min(min, i * 2 + arr.length - next);
  }

  return min;
};

const alphabet = function (char) {
  const code = char.charCodeAt(0);
  return code <= 78 ? code - 65 : 91 - code;
};

const solution = function (name) {
  const chars = name.split("");
  let cnt = 0;

  cnt += cursor(chars);
  chars.forEach((char) => (cnt += alphabet(char)));

  return cnt;
};
