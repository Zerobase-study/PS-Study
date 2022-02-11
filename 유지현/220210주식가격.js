function solution(prices) {
  let answer = [];

  for (let i = 0; i < prices.length - 1; i++) {
    let afterPrices = prices.slice(i + 1);
    let price = prices[i];
    let count = 0;

    while (true) {
      if (price <= afterPrices[0]) {
        count++;
        afterPrices.shift();
      } else {
        count++;
        answer.push(count);
        break;
      }

      if (!afterPrices.length) {
        answer.push(count);
        break;
      }
    }
  }

  answer.push(0);
  return answer;
}

console.log(solution([1, 2, 3, 2, 3])); // [4, 3, 1, 1, 0]
console.log(solution([4, 5, 3, 2, 4])); // [2, 1, 1, 1, 0]
