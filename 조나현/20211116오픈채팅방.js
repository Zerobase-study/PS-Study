function solution(record) {
  let arr = record.map((value) => value.split(" "));
  let person = {};
  let result = [];

  arr.forEach((v) => {
    if (v[0] === "Enter") {
      person[v[1]] = v[2];
    } else if (v[0] === "Change") {
      person[v[1]] = v[2];
    }
  });

  arr.forEach((v) => {
    if (v[0] === "Enter") {
      result.push(`${person[v[1]]}님이 들어왔습니다.`);
    } else if (v[0] === "Leave") {
      result.push(`${person[v[1]]}님이 나갔습니다.`);
    }
  });

  return result;
}
