function gameMap(maps) {
  const row = maps.length;
  const col = maps[0].length;

  // 방향 설정
  const dirX = [0, 1, 0, -1];
  const dirY = [1, 0, -1, 0];

  // visited -> 초기값을 1로 설정
  const visited = [...maps].map(r => r.map(c => 1));

  const bfs = (x, y, visited) => {
    const queue = [];
    queue.push([x, y]);

    while (queue.length > 0) {
      const [x, y] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const nextX = x + dirX[i];
        const nextY = y + dirY[i];

        // 이동 범위 설정
        if (
          nextX >= 0 &&
          nextY >= 0 &&
          nextX < row &&
          nextY < col &&
          maps[nextX][nextY] === 1 &&
          visited[nextX][nextY] === 1
        ) {
          visited[nextX][nextY] = visited[x][y] + 1;
          queue.push([nextX, nextY]);
        }
      }
    }
  };
  bfs(0, 0, visited);
  return visited[row - 1][col - 1] === 1 ? -1 : visited[row - 1][col - 1];
}

console.log(
  gameMap([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
); // 11
console.log(
  gameMap([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ])
); // -1
