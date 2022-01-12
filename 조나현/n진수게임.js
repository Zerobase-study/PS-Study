function solution(n, t, m, p) {
  // n : 진법
  // t : 갯수
  // m : 인원
  // p : 순서
  let i = 0;
  let store = [];
  let answer = '';
  let cnt = 0;
  let target;
  while (t > 0) {
    store.push(...i.toString(n).split(''));
    if (answer == '' && store.length >= p) {
      answer += store[p - 1] + '';
      t--;
      cnt++;
    }
    target = p + m * cnt;
    if (store.length >= target) {
      answer += store[target - 1] + '';
      t--;
      cnt++;
    }

    i++;
  }

  answer = answer.replace(/[a-z]/g, s => s.toUpperCase());
  return answer;
}

// console.log(solution(2, 4, 2, 1));
console.log(solution(16, 16, 2, 1));

// console.log(parseInt("1000",3))
