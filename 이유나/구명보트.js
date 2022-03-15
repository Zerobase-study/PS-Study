function solution(people, limit) {
  const ascedingOrder = people.sort((a, b) => a - b);
  let count = 0;

  while (ascedingOrder.length > 0) {
    for (let i = ascedingOrder.length - 1; i >= 0; i--) {
      let j = 0;
      if (ascedingOrder[i] + ascedingOrder[j] <= limit) {
        ascedingOrder.pop();
        ascedingOrder.shift();
        j++;
        i--;
      } else {
        ascedingOrder.pop();
      }
      count++;
    }
  }

  return count;
}

console.log(solution([70, 50, 80, 50], 100)); // 3
console.log(solution([70, 80, 50], 100)); // 3
