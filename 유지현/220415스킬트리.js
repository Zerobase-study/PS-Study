function solution(skill, skill_trees) {
  let answer = 0;
  let arr = [];

  for (let skills of skill_trees) {
      arr = [];
      for (let alpha of skill) {
          arr.push(skills.indexOf(alpha));
      }

      if (arr.includes(-1)) {
          let noSkill = arr.splice(arr.indexOf(-1));

          let result = true;
          for (let v of noSkill) {
              if (v !== -1) {
                  result = false;
                  break;
              }
          }

          if (!result) continue;        
      }

      let now = arr[0];
      let result = true;
      for (let v of arr) {
          if (v < now) {
              result = false;
              break;
          }
          now = v;
      }

      if (result) answer++;
  }    

  return answer;
}