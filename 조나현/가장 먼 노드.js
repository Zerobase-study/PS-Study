function Graph() {
  this.edge = {};
  this.visited = {};
}

Graph.prototype.addVertex = function (v) {
  this.edge[v] = [];
  this.visited[v] = 0;
};

Graph.prototype.addEdge = function (v1, v2) {
  this.edge[v1].push(v2);
  this.edge[v2].push(v1);
};

function solution(n, vertex) {
  const graph = new Graph();
  for (let i = 1; i <= n; i++) {
    graph.addVertex(i);
  }
  vertex.forEach(([v1, v2]) => graph.addEdge(v1, v2));
  console.log(graph);
  const queue = [];
  let head = 0;
  let tail = 0;
  let max = 0;
  queue[tail++] = [1, 1];
  console.log(queue)

  while (head != tail) {
    let [next, cur] = queue[head++];
    if (graph.visited[next]) continue;

    graph.visited[next] = cur;
    if (cur > max) max = cur;

    for (let i = 0; i < graph.edge[next].length; i++) {
      if (!graph.visited[graph.edge[next][i]]) {
        queue[tail++] = [graph.edge[next][i], cur + 1];
      }
    }
    console.log(queue, graph.visited)
  }

  return Object.values(graph.visited).reduce((acc, cur) => acc + (cur === max ? 1 : 0), 0);
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
