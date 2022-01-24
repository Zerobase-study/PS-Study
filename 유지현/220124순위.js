function solution(n, results) {
  const graph = Array.from(Array(n), () => Array(n).fill(Infinity));
  let answer = 0;

  for (const result of results) {
    const [win, lose] = result;
    graph[win - 1][lose - 1] = 0;
  }

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      if (graph[i][k] === Infinity) continue;
      for (let j = 0; j < n; j++) {
        if (i === k || j === k || graph[k][j] === Infinity) continue;
        if (graph[i][j] > graph[i][k] + graph[k][j])
          graph[i][j] = graph[i][k] + graph[k][j];
      }
    }
  }

  graph.map((arr, idx) => {
    let count = 0;

    arr.map((v) => {
      if (v === 0) count++;
    });

    for (let i = 0; i < n; i++) {
      if (i === idx) continue;
      if (graph[i][idx] === 0) count++;
    }
    if (count === n - 1) answer++;
  });

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
