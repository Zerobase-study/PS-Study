function solution(n, maps) {
  const visited = Array.from(Array(n), () => Array(n).fill(0));

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  const bfs = (x, y, cnt) => {
    const queue = [];
    queue.push([x, y]);
    visited[x][y] = cnt;

    while (queue.length) {
      const [px, py] = queue.shift();

      for (let i = 0; i < 4; i++) {
        let nx = px + dx[i];
        let ny = py + dy[i];
        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < n &&
          ny < n &&
          maps[nx][ny] === 1 &&
          visited[nx][ny] === 0
        ) {
          visited[nx][ny] = cnt++;
          queue.push([nx, ny]);
        }
      }
    }
    return cnt;
  };

  const result = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (maps[i][j] === 1 && visited[i][j] === 0) {
        result.push(bfs(i, j, 1));
      }
    }
  }
  return [result.length, ...result].join(" ");
}

console.log(
  solution(7, [
    [0, 1, 1, 0, 1, 0, 0],
    [0, 1, 1, 0, 1, 0, 1],
    [1, 1, 1, 0, 1, 0, 1],
    [0, 0, 0, 0, 1, 1, 1],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 0, 0, 0],
  ])
);
