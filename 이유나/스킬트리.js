function solution(skill, skill_trees) {
  let answer = 0;

  const map = new Map();

  // 선행 순서 저장 (index)
  for (let i = 0; i < skill.length; i++) {
    map.set(skill[i], i);
  }
  // Map(3) { 'C' => 0, 'B' => 1, 'D' => 2 }

  for (let i = 0; i < skill_trees.length; i++) {
    const skillList = [];
    for (let j = 0; j < skill_trees[i].length; j++) {
      // 선행 스킬이 있다면 따로 순서대로 뽑아주기
      if (map.has(skill_trees[i][j])) skillList.push(skill_trees[i][j]);
      // if (skill.includes(skill_trees[i][j])) skillList.push(skill_trees[i][j]);
    }
    /*
      [ 'B', 'C', 'D' ]
      [ 'C', 'B', 'D' ]
      [ 'C', 'B' ]
      [ 'B', 'D' ]
      []
    */

    for (let k = 0; k < skillList.length; k++) {
      if (map.get(skillList[k]) !== k) break;
      // if (skill[k] !== skillList[k]) break;
      else if (k === skillList.length - 1) answer++;
    }

    // 일치하는 선행 스킬이 0개일 경우 -> 가능한 스킬트리 개수 = 1개
    if (skillList.length === 0) answer++;
  }

  return answer;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"])); // 2
console.log(solution("ABC", ["QPR"])); // 1
