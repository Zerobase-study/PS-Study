function solution(prices) {
  const answer = [];

  while (prices.length > 0) {
    let count = 0;

    for (let i = 1; i < prices.length; i++) {
      // 마지막 prices의 요소일때
      if (prices[i].length === 1) {
        count = 0;
        break;
      }
      const first = prices[0];
      // 주식 가격이 떨어지지 않은 경우
      if (prices[i] >= first) {
        count++;
        // 중간에 가격이 떨어진 경우
        if (prices[i] < first && i < prices.length - 1) {
          return count + 1;
        }
      }

      // 주식 가격이 다음에 바로 떨어진 경우
      if (prices[first + 1] < first) {
        count = 1;
        break;
      }
    }
    answer.push(count);
    prices.shift();
  }

  return answer;
}

console.log(solution([1, 2, 3, 2, 3])); // [4, 3, 1, 1, 0]
