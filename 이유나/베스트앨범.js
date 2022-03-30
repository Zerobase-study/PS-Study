function solution(genres, plays) {
  let totalPlayM = new Map();
  let playListM = new Map();
  let favoritesP = [];
  let indexGenre = [];
  let result = [];

  for (let i = 0; i < plays.length; i++) {
    if (!totalPlayM.has(genres[i])) {
      totalPlayM.set(genres[i], plays[i]);
      // 넘버링 해주기
      playListM.set(`${i} ${genres[i]}`, plays[i]);
    } else {
      totalPlayM.set(genres[i], totalPlayM.get(genres[i]) + plays[i]);
      playListM.set(`${i} ${genres[i]}`, plays[i]);
    }
  }
  // Map(2) { 'classic' => 1450, 'pop' => 3100 }
  /*
    Map(5) {
      '0 classic' => 500,
      '1 pop' => 600,
      '2 classic' => 150,
      '3 classic' => 800,
      '4 pop' => 2500
    }
  */

  // totalPlayM -> value 값 기준 내림차순 정렬
  let sortMap = new Map([...totalPlayM.entries()].sort((a, b) => b[1] - a[1]));
  // Map(2) { 'pop' => 3100, 'classic' => 1450 }

  for (let key of sortMap.keys()) {
    favoritesP.push(key);
  }
  // [ 'pop', 'classic' ]

  // playListM -> value 값 기준 내림차순으로 정렬해주고, key 값만 추출
  let sortMap2 = new Map([...playListM.entries()].sort((a, b) => b[1] - a[1]));

  for (let key of sortMap2.keys()) {
    indexGenre.push(key.split(" "));
  }
  /*
    [
      [ '4', 'pop' ],
      [ '3', 'classic' ],
      [ '1', 'pop' ],
      [ '0', 'classic' ],
      [ '2', 'classic' ]
    ]
  */

  for (let i = 0; i < favoritesP.length; i++) {
    let count = 0;
    for (let j = 0; j < indexGenre.length; j++) {
      if (favoritesP[i] === indexGenre[j][1]) {
        result.push(+indexGenre[j][0]);
        count++;
      }

      // 2가지 노래만 픽 할 수 있음
      if (count === 2) break;
    }
  }

  return result;
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
); // [4, 1, 3, 0]
