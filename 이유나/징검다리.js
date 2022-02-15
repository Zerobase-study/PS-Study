function solution(distance, rocks, n) {
  let answer = 0;
  let start = 0;
  let end = distance;

  const sortRocks = rocks.sort((a, b) => a - b);

  while (start <= end) {
    let removeRocks = 0;
    let previous = 0;
    const mid = Math.floor((start + end) / 2);

    for (const rock of sortRocks) {
      const curDistance = rock - previous;

      // 현재 거리 <= mid
      if (curDistance <= mid) {
        // rock 제거
        removeRocks += 1;
      } else {
        // <-> 다음 rock으로 이동
        previous = rock;
      }
    }

    // 현재 제거한 rocks가 목표 n보다 클 경우 -> 범위를 줄여준다.
    if (removeRocks > n) {
      end = mid - 1;
    } else if (removeRocks <= n) {
      // <-> 범위를 넓혀준다.
      start = mid + 1;
      answer = start;
    }
  }

  return answer;
}

console.log(solution(25, [2, 14, 11, 21, 17], 2)); // 4
