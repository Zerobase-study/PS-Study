function solution(priorities, location) {
  let answer = 0;
  let count = 0;
  let pickDocument = location;

  while (priorities.length > 0) {
    const temp = priorities.shift();

    if (priorities.filter(elem => elem > temp).length > 0) {
      priorities.push(temp);
    } else {
      count++;
      if (pickDocument === 0) {
        answer = count;
        return answer;
      }
    }
    pickDocument--;

    if (pickDocument === -1) {
      pickDocument = priorities.length - 1;
    }
  }

  return answer;
}

console.log(solution([2, 1, 3, 2], 2)); // 1
console.log(solution([1, 1, 9, 1, 1, 1], 0)); // 5
