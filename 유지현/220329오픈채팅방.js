function solution(record) {
  let answer = [];
  let dic = {};
  let id = [];

  for (let i of record) {
    let arr = i.split(" ");

    if (arr[0] === "Enter" || arr[0] === "Change") {
      dic[arr[1]] = arr[2];
      if (arr[0] === "Enter") id.push(["Enter", arr[1]]);
    } else id.push(["Leave", arr[1]]);
  }

  for (let i of id) {
    if (i[0] === "Enter") answer.push(`${dic[i[1]]}님이 들어왔습니다.`);
    else answer.push(`${dic[i[1]]}님이 나갔습니다.`);
  }

  return answer;
}
