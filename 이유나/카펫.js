function solution(brown, yellow) {
  const answer = [];
  const totalGrid = brown + yellow;
  let width;
  let height;

  for (let i = 1; i <= totalGrid; i++) {
    width = i;
    height = totalGrid / i;

    if (((width - 2) * (height - 2) === yellow && width > height) || (width === height && totalGrid % i === 0)) {
      answer.push(width, height);
    }
  }

  return answer;
}

console.log(solution(10, 2)); // [4, 3]
console.log(solution(8, 1)); // [3, 3]
console.log(solution(24, 24)); // [8, 6]
