function solution(scoville, k) {
  // 섞은 음식의 스코빌 지수
  // = 가장 맵지 않은 음식의 스코빌 지수 + (두 번째로 맵지 않은 음식의 스코빌 지수 * 2)
  let ascendingS = scoville.sort((a, b) => a - b);
  let mix = 0;
  let count = 0;

  for (let i = 0; i < ascendingS.length; i++) {
    if (ascendingS[0] > ascendingS[1]) {
      ascendingS.sort((a, b) => a - b);
    }

    if (ascendingS[i] < k && ascendingS[i + 1] < k) {
      mix = ascendingS[i] + ascendingS[i + 1] * 2;
      ascendingS.splice(i, 2, mix);
      i--;
      count++;
    } else break;
  }

  // 모든 음식의 스코빌 지수를 K 이상으로 만들 수 없는 경우 -> -1 return
  // let unavailable = ascendingS.find((elem) => elem < k);
  // return unavailable !== undefined ? -1 : count;

  let unavailable = ascendingS.filter((elem) => elem < k);
  return unavailable.length > 0 ? -1 : count;
}

console.log(solution([1, 2, 3, 9, 10, 12], 7)); // 2
console.log(solution([1, 1, 1, 1, 1, 1], 50)); // -1
