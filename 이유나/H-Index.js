function solution(citations) {
  const sortArr = citations.sort((a, b) => b - a);
  let count = 0;

  for (let i = 0; i < sortArr.length; i++) {
    if (i < sortArr[i]) count++;
  }

  return count;
}

console.log(solution([3, 0, 6, 1, 5])); // 3
