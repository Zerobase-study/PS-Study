function solution(begin, target, words) {
  var answer = 0;
  if (!words.includes(target)) return 0;

  const queue = [begin];
  const visited = new Set();
  let temp = [];

  const oneDiff = (target, compare) => {
    let cnt = 0;
    for (let i = 0; i < target.length; i++) {
      if (target[i] !== compare[i]) cnt++;
    }
    return cnt === 1 ? true : false;
  };

  while (queue.length) {
    const cur = queue.shift();
    visited.add(cur);

    if (cur === target) return answer;

    for (let i = 0; i < words.length; i++) {
      if (!visited.has(words[i]) && oneDiff(cur, words[i])) temp.push(words[i]);
    }

    if (!queue.length) {
      answer++;
      queue.push(...temp);
      temp = [];
    }
  }
  return answer;
}

// console.log(oneDiff('abc', 'abb'));
console.log(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']));
