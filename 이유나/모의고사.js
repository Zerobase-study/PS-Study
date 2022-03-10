function solution(answers) {
  const answer = [];

  const no1 = [1, 2, 3, 4, 5];
  const no2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const no3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let countNo1 = 0;
  let countNo2 = 0;
  let countNo3 = 0;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === no1[i % no1.length]) {
      countNo1++;
    }

    if (answers[i] === no2[i % no2.length]) {
      countNo2++;
    }

    if (answers[i] === no3[i % no3.length]) {
      countNo3++;
    }
  }
  const maxNum = Math.max(countNo1, countNo2, countNo3);

  if (maxNum === countNo1) answer.push(1);
  if (maxNum === countNo2) answer.push(2);
  if (maxNum === countNo3) answer.push(3);

  return answer;
}

console.log(solution([1, 2, 3, 4, 5])); // [1]
console.log(solution([1, 3, 2, 4, 2])); // [1, 2, 3]
