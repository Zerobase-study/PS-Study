function solution(prices) {
  const answer = [];
  for (let i = 0; i < prices.length; i++) {
    let second = 0;
    let flag = true;
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] > prices[j]) {
        if (i + 1 === j) second++;
        answer.push(second);
        flag = false;
        break;
      } else {
        second++;
      }
    }
    if (flag) answer.push(second);
  }
  return answer;
}

console.log(solution([1, 2, 3, 2, 3]));
