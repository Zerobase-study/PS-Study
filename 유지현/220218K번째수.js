function solution(array, commands) {
  let answer = [];

  for (let i of commands) {
    let newArray = array.slice(i[0] - 1, i[1]);
    newArray.sort((x, y) => x - y);
    answer.push(newArray[i[2] - 1]);
  }

  return answer;
}
