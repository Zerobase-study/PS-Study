function solution(operations) {
  let priorityQueue = [];

  for (let operation of operations) {
    let separateO = operation.split(" ");

    // 숫자 삽입
    if (separateO.includes("I")) {
      priorityQueue.push(+separateO[1]);
    }

    priorityQueue.sort((a, b) => b - a);

    // 숫자 제거
    if (operation === "D 1") {
      priorityQueue.shift();
    } else if (operation === "D -1") {
      priorityQueue.pop();
    }
  }

  if (priorityQueue.length !== 0) {
    priorityQueue = [priorityQueue[0], priorityQueue[priorityQueue.length - 1]];
  }

  return priorityQueue.length ? priorityQueue : [0, 0];
}

console.log(solution(["I 16", "D 1"])); // [0, 0]
console.log(solution(["I 7", "I 5", "I -5", "D -1"])); // [7, 5]
