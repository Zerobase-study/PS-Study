function splitString(p) {
  let right = 0;
  let result = [];
  p.split("").every((char, i) => {
    right += char === "(" ? 1 : -1;
    if (!right) {
      result = (p[i + 1] && [p.slice(0, i + 1), p.slice(i + 1)]) || [p, ""];
      return false;
    }
    return true;
  });

  return result;
}

function isRight(p) {
  let right = 0;
  return p.split("").every((char) => {
    right += char === "(" ? 1 : -1;
    if (right < 0) {
      return false;
    }
    return true;
  });
}

function solution(p) {
  if (!p || isRight(p)) {
    return p;
  }

  const [u, v] = splitString(p);

  if (isRight(u)) {
    return `${u}${solution(v)}`;
  } else {
    const reversedU = u
      .slice(1, -1)
      .split("")
      .map((str) => {
        return str === "(" ? ")" : "(";
      })
      .join("");
    return `(${solution(v)})${reversedU}`;
  }
}
