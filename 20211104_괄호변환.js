function solution(p) {
  let open = 0;
  let close = 0;
  let stack = [];
  let u, v;
  let i = 0;

  if (p === "") return p;

  do {
    if (p[i] === "(") {
      open++;
      stack.push("(");
    } else {
      close++;
      if (stack[stack.length - 1] === "(") stack.pop();
    }
    i++;
  } while (open !== close);

  u = p.slice(0, i);
  v = p.slice(i);

  if (!stack.length) return u + solution(v);
  else {
    u = u
      .slice(1, u.length - 1)
      .replace(/\(|\)/g, (s) => (s === "(" ? ")" : "("));
    v = `(${solution(v)})`;
  }

  return v + u;
}
