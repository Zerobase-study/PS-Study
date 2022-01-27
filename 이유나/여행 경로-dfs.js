function solution(tickets) {
  let answer = [];

  function dfs(remainingTickets, curLocation, route) {
    if (remainingTickets.length === 0) {
      answer.push(route);
    } else {
      remainingTickets.forEach(([from, to], index) => {
        if (curLocation === from) {
          const newRemained = remainingTickets.slice();
          newRemained.splice(index, 1);

          dfs(newRemained, to, route.concat(to));
        }
      });
    }
  }
  dfs(tickets, "ICN", ["ICN"]);
  return answer.sort()[0];
}

console.log(
  solution([
    ["ICN", "JFK"],
    ["HND", "IAD"],
    ["JFK", "HND"],
  ])
); // ["ICN", "JFK", "HND", "IAD"]

console.log(
  solution([
    ["ICN", "SFO"],
    ["ICN", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "ICN"],
    ["ATL", "SFO"],
  ])
); // ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]
