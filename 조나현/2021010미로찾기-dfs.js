function findMaze(row, col, str) {
  const visited = Array.from(Array(row), () => Array(col).fill(0));
  const map = str.split(' ').map(v1 => [...v1].map(v2 => +v2))

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  const result = [];

  const dfs = (index, x, y, visited) => {
    if (x === row - 1 && y === col - 1) {
      result.push(index);
      return;
    }

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx >= 0 && ny >= 0 && nx < row && ny < col && visited[nx][ny] === 0 && map[nx][ny] === 1) {
        visited[nx][ny] = 1;
        dfs(index + 1, nx, ny, visited);
        visited[nx][ny] = 0;
      }
    }
  };

  dfs(1, 0, 0, visited);

  return result.length ? Math.min(...result) : -1;
}

console.log(findMaze(4, 6, '101111 101010 101011 111011'));
