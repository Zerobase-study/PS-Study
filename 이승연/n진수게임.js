function solution(n, t, m, p) {
  let str = "";
  let currNum = 0;
  while (str.length < t * m) {
    str += currNum.toString(n);
    currNum += 1;
  }

  const mod = m === p ? 0 : p;

  return [...str.substring(0, t * m)]
    .filter((_, i) => (i + 1) % m === mod)
    .join("")
    .replace(/([a-z])/g, (_, p1) => p1.toUpperCase());
}
