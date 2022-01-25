function solution(n, edge) {
  const visited = Array.from(Array(n + 1).fill(0));
  const level = Array.from(Array(n + 1).fill(0));

  const bfs = (start, arr) => {
    const queue = [start];
    visited[start] = 1;

    while (queue.length) {
      const node = queue.shift();
      const currentLevel = level[node] + 1;

      for (let vertex of edge) {
        if (vertex[0] === node && !visited[vertex[1]]) {
          queue.push(vertex[1]);
          visited[vertex[1]] = 1;
          level[vertex[1]] = currentLevel;
        } else if (vertex[1] === node && !visited[vertex[0]]) {
          queue.push(vertex[0]);
          visited[vertex[0]] = 1;
          level[vertex[0]] = currentLevel;
        }
      }
    }
  };

  bfs(1, edge);

  const max = Math.max(...level);
  return level.filter((i) => i === max).length;
}

console.log(
  solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ])
);
