function solution(maps) {
  const row = maps.length;
  const col = maps[0].length;
  const visited = Array.from(Array(row), () => Array(col).fill(0));

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  const bfs = (x, y, visited) => {
    const queue = [];
    queue.push({ x, y });
    visited[x][y] = 1;

    while (queue.length) {
      const { x, y } = queue.shift();

      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < row &&
          ny < col &&
          visited[nx][ny] === 0 &&
          maps[nx][ny] === 1
        ) {
          visited[nx][ny] = visited[x][y] + 1;
          queue.push({ x: nx, y: ny });
        }
      }
    }
  };

  bfs(0, 0, visited);
  return visited[row - 1][col - 1] ? visited[row - 1][col - 1] : -1;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ])
);
