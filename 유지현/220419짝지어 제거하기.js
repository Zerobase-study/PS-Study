function solution(s) {
  let stack = [];
  
  if (s.length % 2) return 0;
      
  for (let i of s) {
      if (!stack.length) stack.push(i);
      else {
          stack[stack.length - 1] !== i ? stack.push(i) : stack.pop();
      }
  }

  return stack.length ? 0 : 1;
}