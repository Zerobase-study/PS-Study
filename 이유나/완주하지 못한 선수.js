function solution(participant, completion) {
  const map = new Map();

  for (const player of participant) {
    if (!map.has(player)) {
      map.set(player, 1);
    } else {
      // 동명이인이 있을 경우
      map.set(player, map.get(player) + 1);
    }
  }

  for (const complete of completion) {
    if (map.has(complete)) {
      map.set(complete, map.get(complete) - 1);
    }
  }

  for (const [key, value] of map) {
    if (value > 0) return key;
  }
}

console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki'])); // "leo"
console.log(solution(['marina', 'josipa', 'nikola', 'vinko', 'filipa'], ['josipa', 'filipa', 'marina', 'nikola'])); // "vinko"
console.log(solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'])); // "mislav"
