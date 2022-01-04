function findMaze(row, col, str) {
  const visited = Array.from(Array(row), () => Array(col).fill(0));
  const map = str.split(' ').map(v1 => [...v1].map(v2 => +v2));

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  const bfs = (x, y, visited) => {
    let queue = [];
    queue.push([x, y]);
    visited[x][y] = 1;

    while (queue.length) {
      let [px, py] = queue.shift();

      for (let i = 0; i < 4; i++) {
        let nx = px + dx[i];
        let ny = py + dy[i];
        if (nx >= 0 && ny >= 0 && nx < row && ny < col && visited[nx][ny] === 0 && map[nx][ny] === 1) {
          visited[nx][ny] = visited[px][py] + 1;
          queue.push([nx, ny]);
        }
      }
    }
  };

  bfs(0, 0, visited);
  return visited[row - 1][col - 1] ? visited[row - 1][col - 1] : -1;
}

console.log(findMaze(4, 6, '101111 101010 101011 111011'));
