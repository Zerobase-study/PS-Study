function solution(begin, target, words) {
  let answer = 0;
  let visited = [];
  let queue = [];

  if (!words.includes(target)) return 0;

  queue.push([begin, answer]);

  while (queue.length > 0) {
    let [elem, count] = queue.shift();

    if (elem === target) {
      return count;
    }

    words.forEach((word) => {
      let notSame = 0;

      if (visited.includes(word)) return;

      for (let i = 0; i < word.length; i++) {
        if (word[i] !== elem[i]) notSame++;
      }

      if (notSame === 1) {
        queue.push([word, ++count]);
        visited.push(word);
      }
    });
  }

  return answer;
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])); // 4
console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"])); // 0
