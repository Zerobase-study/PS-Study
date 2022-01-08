function houseNumber(n, maps) {
  const visited = Array.from(Array(n), () => Array(n).fill(0));

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const count = [];
  let house = 0;

  const dfs = (x, y, visited) => {
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < n &&
        ny < n &&
        visited[nx][ny] === 0 &&
        maps[nx][ny] === 1
      ) {
        visited[nx][ny] = 1;
        house++;
        dfs(nx, ny, visited);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (maps[i][j] === 1 && visited[i][j] === 0) {
        dfs(i, j, visited);
        count.push(house);
        house = 0;
      }
    }
  }

  count.sort((x, y) => x - y).unshift(count.length);
  return count.join("\n");
}

console.log(
  houseNumber(7, [
    [0, 1, 1, 0, 1, 0, 0],
    [0, 1, 1, 0, 1, 0, 1],
    [1, 1, 1, 0, 1, 0, 1],
    [0, 0, 0, 0, 1, 1, 1],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 0, 0, 0],
  ])
);
