function solution(begin, target, words) {
  const answer = [];
  if (!words.includes(target)) return 0;

  const visited = new Set();

  const oneDiff = (target, compare) => {
    let cnt = 0;
    for (let i = 0; i < target.length; i++) {
      if (target[i] !== compare[i]) cnt++;
    }
    return cnt === 1 ? true : false;
  };

  const dfs = (cur, words, visited, level) => {
    if (cur === target) {
      answer.push(level);
      return;
    }

    for (let i = 0; i < words.length; i++) {
      if (!visited.has(words[i]) && oneDiff(cur, words[i])) {
        visited.add(cur);
        dfs(words[i], words, visited, level + 1);
        visited.delete(cur);
      }
    }

    return;
  };

  dfs(begin, words, visited, 0);
  return Math.min(...answer);
}

// console.log(oneDiff('abc', 'abb'));
console.log(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']));
// console.log(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']));
