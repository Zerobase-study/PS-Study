function solution(tickets) {
  const result = [];
  const visited = [];
  const len = tickets.length;

  tickets.sort();

  const dfs = (start, count) => {
    result.push(start);

    if (count === len) {
      return true;
    }

    for (let i = 0; i < len; i++) {
      if (tickets[i][0] === start && !visited[i]) {
        visited[i] = true;
        if (dfs(tickets[i][1], count + 1)) return true;

        visited[i] = false;
      }
    }

    result.pop();
    return false;
  };

  dfs("ICN", 0);

  return result;
}

console.log(
  solution([
    ["ICN", "JFK"],
    ["HND", "IAD"],
    ["JFK", "HND"],
  ])
);
console.log(
  solution([
    ["ICN", "SFO"],
    ["ICN", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "ICN"],
    ["ATL", "SFO"],
  ])
);
