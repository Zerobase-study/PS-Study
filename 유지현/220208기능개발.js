function solution(progresses, speeds) {
  const answer = [];
  const days = [];

  for (let i = 0; i < progresses.length; i++) {
    days.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }

  let count = 1;
  let max = days.shift();

  while (true) {
    if (!days.length) {
      answer.push(count);
      break;
    }

    if (days[0] <= max) {
      count++;
      days.shift();
    } else {
      answer.push(count);
      max = days.shift();
      count = 1;
    }
  }

  return answer;
}
