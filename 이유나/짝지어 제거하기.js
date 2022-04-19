function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    // 현재 요소값과 stack의 마지막 요소값이 같지 않으면,
    if (s[i] !== stack[stack.length - 1]) {
      stack.push(s[i]);
    } else {
      stack.pop();
    }
  }

  return stack.length === 0 ? 1 : 0;
}

console.log(solution('baabaa')); // 1
console.log(solution('cdcd')); // 0