function solution(record) {
  const answer = [];
  const map = new Map();

  record.forEach((elem) => {
    const [state, userId, nickName] = elem.split(" ");

    if (state === "Enter") {
      map.set(userId, nickName);
      answer.push([userId, "님이 들어왔습니다."]);
    } else if (state === "Leave") {
      answer.push([userId, "님이 나갔습니다."]);
    } else {
      map.set(userId, nickName);
    }
  });

  const result = answer.map((elem) => {
    const strCombine = map.get(elem[0]) + elem[1];
    return strCombine;
  });

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
);
