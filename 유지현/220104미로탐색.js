const N = 7;
const M = 7;
const input = "1011111 1110001 1000001 1000001 1000001 1000001 1111111";

const graph = [];

const data = input.split(" ");
for (let i = 0; i < N; i++) {
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

      if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

      if (graph[nx][ny] === 1) {
        graph[nx][ny] = graph[x][y] + 1;
        queue.push({ x: nx, y: ny });
      }

      // if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
      //   if (graph[nx][ny] === 1) {
      //     graph[nx][ny] = graph[x][y] + 1;
      //     queue.push({ x: nx, y: ny });
      //   }
      // }
    }
  }

  return graph[N - 1][M - 1];
}

console.log(BFS(0, 0));
