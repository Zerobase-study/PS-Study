function solution(n, times) {
  let min = 0;
  let max = Math.max(...times) * n;
  let answer = 0;

  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    let sumTimes = 0;

    for (const time of times) {
      sumTimes += Math.floor(mid / time);
    }

    // 현재 가능한 인원수 >= 목표 인원수
    if (sumTimes >= n) {
      // 시간을 더 줄여주기
      max = mid - 1;
      answer = mid;
    } else {
      // 현재 가능한 인원수 <= 목표 인원수
      // 시간을 더 늘려주기
      min = mid + 1;
    }
  }

  return answer;
}

console.log(solution(6, [7, 10])); // 28
