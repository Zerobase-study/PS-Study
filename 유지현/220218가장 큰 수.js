function solution(numbers) {
  let answer = numbers
    .map(v => v + '')
    .sort((x, y) => y + x - (x + y))
    .join('');

  return answer[0] === '0' ? '0' : answer;
}
