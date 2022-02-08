function solution(progresses, speeds) {
  const answer = [];
  let head = 0;
  let tail = progresses.length;
  let day = 0;
  let cnt = 0;

  while (head !== tail) {
    day++;
    cnt = 0;
    for (let i = head; i < tail; i++) {
      if (progresses[i] + day * speeds[i] < 100) break;
      cnt++;
    }
    if (cnt > 0) {
      answer.push(cnt);
      head += cnt;
    }
  }
  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
