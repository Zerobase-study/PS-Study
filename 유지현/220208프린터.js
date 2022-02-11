function solution(priorities, location) {
  let answer = 0;
  const pri = priorities.map((v, i) => [v, i]);
  const arr = [];

  while (pri.length !== 0) {
    let now = pri.shift();
    if (pri.some((a) => now[0] < a[0])) pri.push(now);
    else {
      arr.push(now);
      if (arr[answer][1] === location) break;
      else answer++;
    }
  }

  return answer + 1;
}
