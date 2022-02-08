function solution(progresses, speeds) {
  const answer = [];
  const temp = [];
  let days = 0;

  // days list
  while (progresses.length > 0) {
    const division = (100 - progresses[0]) / speeds[0];
    const remainder = (100 - progresses[0]) % speeds[0];

    if (remainder !== 0) {
      days = Math.ceil(division);
      temp.push(days);
      progresses.shift();
      speeds.shift();
    } else {
      days = division;
      temp.push(days);
      progresses.shift();
      speeds.shift();
    }
  }

  // count
  while (temp.length > 0) {
    const first = temp[0];
    const count = temp.findIndex(num => first < num);

    if (count !== -1) {
      answer.push(count);
      temp.splice(0, count);
    } else {
      answer.push(temp.length);
      temp.splice(0, temp.length);
    }
  }

  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5])); // [2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); // [1, 3, 2]
