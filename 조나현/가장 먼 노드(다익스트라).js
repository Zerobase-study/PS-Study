function solution(n, vertex) {
  const graph = Array.from(Array(n + 1), () => []);
  vertex.forEach(([v1, v2]) => {
    graph[v1].push(v2);
    graph[v2].push(v1);
  });

  const visited = Array(n + 1).fill(false);
  const queue = [];

  queue.push([1, 0]);
  visited[1] = 0;

  while (queue.length) {
    let [to, cost] = queue.shift();

    graph[to].map(nextNode => {
      const nextCost = cost + 1;
      if (visited[nextNode] === false) {
        visited[nextNode] = nextCost;
        queue.push([nextNode, nextCost]);
      }
    });
  }

  const max = Math.max(...visited);
  return visited.filter(v => v === max).length;
}

console.log(
  solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ])
);
