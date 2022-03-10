function solution(numbers) {
  const answer = [];
  const separateN = numbers.split("");

  // 소수
  const isPrime = (num) => {
    let count = 0;

    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        count++;
      }
      if (count > 2) {
        break;
      }
    }

    if (count === 2 && !answer.includes(num)) {
      answer.push(num);
    }
  };

  // 숫자
  const makeNumbers = (arr, str) => {
    if (arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        const temp = [...arr];
        temp.splice(i, 1);
        makeNumbers(temp, str + arr[i]);
      }
    }
    if (str.length > 0) {
      isPrime(+str);
    }
  };

  makeNumbers(separateN, "");

  return answer.length;
}

console.log(solution("17")); // 3
console.log(solution("011")); // 2
