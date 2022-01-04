function solution(n, m, arr) {
  const dirX = [-1, 0, 1, 0];
  const dirY = [0, 1, 0, -1];

  const queue = [];
  queue.push({ x: 0, y: 0 });

  while (queue.length > 0) {
    const element = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nextX = element.x + dirX[i];
      const nextY = element.y + dirY[i];

      // 범위 밖
      if (nextX < 0 || nextY < 0 || nextX >= n || nextY >= m) {
        continue;
      }

      // 인접한 요소가 1일 때만 이동
      if (arr[nextX][nextY] !== 1) {
        continue;
      }

      arr[nextX][nextY] = arr[element.x][element.y] + 1;
      queue.push({ x: nextX, y: nextY });
    }
  }

  const answer = arr[n - 1][m - 1];
  console.log(answer);
}
