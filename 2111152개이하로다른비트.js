function solution(numbers) {
  const ANSWER = [];

  // 짝수일때 -> 끝자리 0 / 홀수일때 -> 끝자리 1
  // 짝수일때는 그 바로 다음 홀수가 비교대상 가장 작은 수
  // 바로 answer 빈 배열에 +1해서 push
  numbers.forEach((elem) => {
    // 짝수일 때
    if (elem % 2 === 0) {
      ANSWER.push(elem + 1);
      // 홀수일 때 -> 01을 10으로 바꿔주기
    } else {
      const BINARY_NUM = "0" + elem.toString(2);
      const CHECK_INDEX = BINARY_NUM.lastIndexOf("01");
      const TEMP =
        BINARY_NUM.substring(0, CHECK_INDEX) +
        "10" +
        BINARY_NUM.substring(CHECK_INDEX + 2);
      ANSWER.push(parseInt(TEMP, 2));
    }
  });
  return ANSWER;
}

console.log(solution([2, 7]));
