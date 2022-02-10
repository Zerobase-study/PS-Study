function solution(bridge_length, weight, truck_weights) {
  const bridge = new Array(bridge_length).fill(0); // [0, 0]
  let count = 0;

  while (bridge.length > 0) {
    // 다음 차례로 들어올 트럭의 공간을 만들어줌.
    bridge.shift(); // 1. [0] 2. [7] 3. [0] 4. [4]

    if (truck_weights.length > 0) {
      // 현재 다리의 총 무게
      const curBridgeWeigth = bridge.reduce((a, b) => a + b, 0);
      // (1) 현재 0 (2) 현재 7 (3) 현재 0 (4) 현재 4

      if (curBridgeWeigth + truck_weights[0] <= weight) {
        // (1) 0 + 7 <= 10 현재 true (2) 7 + 4 <= 10 현재 false (3) 0 + 4 <= 10 현재 true (4) 9로 true
        const nextTruck = truck_weights.shift();
        bridge.push(nextTruck); // (1). [0, 7] (3) [0, 4] (4) [4, 5]
      } else {
        bridge.push(0); // (2) [7, 0]
      }
    }
    count++;
  }
  return count;
}

console.log(solution(2, 10, [7, 4, 5, 6])); // 8
console.log(solution(100, 100, [10])); // 101
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])); // 110
