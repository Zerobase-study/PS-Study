function solution(numbers) {
  const sortNumbers = numbers.sort((a, b) => ' ' + b + a - (' ' + a + b)).join('');

  return sortNumbers[0] === '0' ? '0' : sortNumbers;
}

console.log(solution([6, 10, 2])); // "6210"
console.log(solution([3, 30, 34, 5, 9])); // "9534330"
