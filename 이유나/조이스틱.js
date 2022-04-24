function solution(name) {
  let answer = 0;

  // 최대로 많이 움직이는 경우 -> 길이만큼 그대로 이동
  let min = name.length - 1;

  const asciiA = "A".charCodeAt();
  const asciiZ = "Z".charCodeAt() + 1;

  for (let i = 0; i < name.length; i++) {
    const asciiNum = name.charCodeAt(i);

    // 총 알파벳 숫자중 절반(N)보다 작을 경우 정방향으로 이동
    if (asciiNum < "N".charCodeAt()) {
      answer += asciiNum % asciiA;
    } else {
      // 절반(N)보다 클 경우 역방향으로 이동하는게 더 빠름
      answer += asciiZ - asciiNum;
    }

    // 좌,우 이동 인덱스
    let nextIdx = i + 1;

    while (nextIdx < name.length && name.charCodeAt(nextIdx) === asciiA) {
      nextIdx += 1;

      // 연속되는 알파벳보다 A의 길이가 더 길다면, 정방향보다 역방향으로 다시 가는게 더 빠름.
      // Ex) BBBAAAAAABA
      // 처음 위치로 다시 돌아간 횟수(i * 2) + 문자열 길이 - A가 연속으로 나오는 지점의 다음값
      min = Math.min(min, i * 2 + (name.length - nextIdx));

      // BBBBAAAAAAAB -> 처음부터 뒷부분을 먼저 입력하는 것이 더 빠른 경우
      min = Math.min(min, (name.length - nextIdx) * 2 + i);
    }
  }

  return answer + min;
}

console.log(solution("JEROEN")); // 56
console.log(solution("JAN")); // 23
