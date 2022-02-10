function solution(bridge_length, weight, truck_weights) {
  if (truck_weights.length === 1) return bridge_length + 1;

  let bridge = Array.from(Array(bridge_length).fill(0));
  bridge[bridge_length - 1] = truck_weights.shift();
  let answer = 1;

  while (true) {
    let bridgeWeight = bridge.reduce((prev, curr) => prev + curr);

    if (bridgeWeight - bridge[0] + truck_weights[0] <= weight) {
      let truck = truck_weights.shift();
      bridge.shift();
      bridge.push(truck);

      bridgeWeight += truck;
      answer += 1;
    } else {
      bridge.shift();
      bridge.push(0);
      answer += 1;
    }

    if (!truck_weights.length) {
      answer += bridge_length;
      break;
    }
  }

  return answer;
}

console.log(solution(2, 10, [7, 4, 5, 6])); // 8
console.log(solution(100, 100, [10])); // 101
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])); // 110
