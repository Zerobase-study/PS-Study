function solution(number, k) {
  const stack = [];
  let count = k;

  for (let i = 0; i < number.length; i++) {
    while (stack.length > 0 && count > 0) {
      if (number[i] > stack[stack.length - 1]) {
        stack.pop();
        count -= 1;
      } else break;
    }
    stack.push(number[i]);
  }

  stack.splice(number.length - k, k); // 같은 숫자일 경우
  return stack.join("");
}

console.log(solution("1924", 2)); // '94'
console.log(solution("1231234", 3)); // "3234"
console.log(solution("4177252841", 4)); // "775841"
