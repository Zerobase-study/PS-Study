function solution(people, limit) {
  const ascendingOrder = people.sort((a, b) => a - b);
  let count = 0;

  while (ascendingOrder.length > 0) {
    for (let i = ascendingOrder.length - 1; i >= 0; i--) {
      let j = 0;
      if (ascendingOrder[i] + ascendingOrder[j] <= limit) {
        ascendingOrder.pop();
        ascendingOrder.shift();
        j++;
        i--;
      } else {
        ascendingOrder.pop();
      }
      count++;
    }
  }

  return count;
}

console.log(solution([70, 50, 80, 50], 100)); // 3
console.log(solution([70, 80, 50], 100)); // 3
