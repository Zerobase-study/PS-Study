function solution(participant, completion) {
  let nameList = {};

  for (let name of participant) {
    nameList[name] ? nameList[name]++ : (nameList[name] = 1);
  }

  for (let name of completion) {
    nameList[name]--;
  }

  for (let i in nameList) {
    if (nameList[i] !== 0) return i;
  }
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])); // "leo"
console.log(
  solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]
  )
); // "vinko"
console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
); // "mislav"
