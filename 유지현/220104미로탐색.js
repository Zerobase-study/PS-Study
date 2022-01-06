function findmaze(row, col, input) {
  const graph = [];

  const data = input.split(" ");
  for (let i = 0; i < row; i++) {
    graph[i] = data[i].split("").map(Number);
  }

  function BFS(x, y) {
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    const queue = [];
    queue.push({ x, y });

    while (queue.length) {
      const { x, y } = queue.shift();

      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx >= 0 && ny >= 0 && nx < row && ny < col && graph[nx][ny] === 1) {
          graph[nx][ny] = graph[x][y] + 1;
          queue.push({ x: nx, y: ny });
        }
      }
    }
    return graph[row - 1][col - 1];
  }
  return BFS(0, 0);
}

console.log(
  findmaze(7, 7, "1011111 1110001 1000001 1000001 1000001 1000001 1111111")
);
