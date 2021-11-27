function solution(n, t, m, p) {
  let answer = '';
  let nowNumber = 0;
  let playerCount = p;
  // 목표 글자수를 채울 때까지 반복
  while(answer.length < t){
    // 현재 말하는 숫자를 진수에 맞게 변환
    const numString = nowNumber.toString(n);
    // 이 숫자를 튜브가 말 할 차례면 answer에 추가하고 다음 순서를 지정
    if(numString.length >= playerCount) {
      answer += numString[playerCount-1].toUpperCase();
      playerCount = m - (numString.length-playerCount);
    } // 이 숫자를 말할 수 없다면 다음 순서를 지정
    else playerCount -= numString.length;
    nowNumber++; // 숫자는 매회 증가
  }
  // 문자열 리턴
  return answer;
}

// console.log(solution(2,4,2,1));
// console.log(solution(16,16,2,1));
// console.log(solution(16,16,2,2));