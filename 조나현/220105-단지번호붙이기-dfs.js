function solution(n, maps) {
  const visited = Array.from(Array(n), () => Array(n).fill(0));

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  const dfs = (x, y, visited) => {
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < n &&
        ny < n &&
        maps[nx][ny] === 1 &&
        visited[nx][ny] === 0
      ) {
        visited[nx][ny] = 1;
        cnt++;
        dfs(nx, ny, visited);
      }
    }
  };

  const result = [];
  let cnt = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (maps[i][j] === 1 && visited[i][j] === 0) {
        dfs(i, j, visited);
        result.push(cnt);
        cnt = 0;
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
