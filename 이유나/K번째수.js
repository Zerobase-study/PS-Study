function solution(array, commands) {
  const answer = [];

  for (const command of commands) {
    const sliceArr = array.slice(command[0] - 1, command[1]);
    sliceArr.sort((a, b) => a - b);

    for (let i = 0; i < sliceArr.length; i++) {
      if (i === command[2] - 1) {
        answer.push(sliceArr[i]);
      }
    }
  }

  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
); // [5, 6, 3]
