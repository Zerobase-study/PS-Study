function solution(record) {
  let map = new Map();
  let result = [];

  // map에 유저 아이디 => 닉네임 저장
  for (let r1 of record) {
    let splitR = r1.split(" ");

    if (splitR[0] === "Enter" || splitR[0] === "Change") {
      map.set(splitR[1], splitR[2]);
    }
  }
  // Map(2) { 'uid1234' => 'Prodo', 'uid4567' => 'Ryan' }

  // map에서 유저아이디 탐색 후, 상태 메시지 출력
  for (let r2 of record) {
    let splitR = r2.split(" ");

    if (splitR[0] === "Enter") {
      result.push(`${map.get(splitR[1])}님이 들어왔습니다.`);
    }

    if (splitR[0] === "Leave") {
      result.push(`${map.get(splitR[1])}님이 나갔습니다.`);
    }
  }

  return result;
}

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
); // ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]
