function solution(n, results) {
  const graph = Array.from(Array(n + 1), () => Array(n + 1).fill(false));
  results.forEach(([win, lose]) => {
    graph[win][lose] = 1;
    graph[lose][win] = -1;
    graph[win][win] = 0;
    graph[lose][lose] = 0;
  });

  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (graph[i][k] === 1 && graph[k][j] === 1) {
          graph[i][j] = 1;
        }
        if (graph[i][k] === -1 && graph[k][j] === -1) {
          graph[i][j] = -1;
        }
      }
    }
  }
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    let flag = true;
    for (let j = 1; j <= n; j++) {
      if (graph[i][j] === false) {
        flag = false;
        break;
      }
    }
    if (flag) answer++;
  }
  return answer;
}

console.log(
  solution(5, [
    [4, 3],
    [4, 2],
    [3, 2],
    [1, 2],
    [2, 5],
  ])
);
