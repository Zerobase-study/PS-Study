function solution(maps) {
  const row = maps.length;
  const col = maps[0].length;

  const visited = Array.from(Array(row), () => Array(col).fill(0));

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  const bfs = (x, y) => {
    const queue = [];
    queue.push([x, y]);
    visited[x][y] = 1;

    while (queue.length) {
      const [px, py] = queue.shift();

      for (let i = 0; i < 4; i++) {
        let nx = px + dx[i];
        let ny = py + dy[i];
        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < row &&
          ny < col &&
          maps[nx][ny] === 1 &&
          visited[nx][ny] === 0
        ) {
          visited[nx][ny] = visited[px][py] + 1;
          queue.push([nx, ny]);
        }
      }
    }
  };
  bfs(0, 0);

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
