function solution(bridge_length, weight, truck_weights) {
  let head = 0;
  let tail = truck_weights.length;
  let second = 0;

  let curr = [];
  let i = 0;
  let sum = 0;
  while (head !== tail) {
    second++;
    curr = curr.map(([weight, length]) => [weight, length + 1]);

    if (sum + truck_weights[i] <= weight) {
      curr.push([truck_weights[i], 1]);
      sum += truck_weights[i];
      i++;
    }

    if (curr[head][1] === bridge_length) {
      sum -= curr[head][0];
      head++;
    }
  }
  return second + 1;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
