function solution(scoville, K) {
  scoville.sort((x, y) => x - y);

  let low = [];
  let count = 0;

  for (let v of scoville) {
    if (v >= K) break;
    low.push(v);
  }
  
  while (low.length) {
    let mix = low.shift() + (low.shift() * 2);
    count++;

    if (mix < K) {
      low.push(mix);
      low.sort((x, y) => x - y);
    }
  }

  return count;
}

console.log(solution([1, 2, 3, 9, 10, 12], 7)); // 2
console.log(solution([1, 1], 3)); // 1
console.log(solution([3, 10], 5)); // 1