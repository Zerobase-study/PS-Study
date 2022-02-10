function solution(priorities, location) {
  const target = new Array(priorities.length).fill(0);
  target[location] = 1;

  let cnt = 0;
  const isShift = arr => {
    return [...arr].sort()[arr.length - 1] === arr[0] ? true : false;
  };

  while (priorities.length) {
    if (isShift(priorities)) {
      priorities.shift();
      cnt++;
      if (target.shift()) return cnt;
    } else {
      priorities.push(priorities.shift());
      target.push(target.shift());
    }
  }
}

console.log(solution([2, 1, 3, 2], 2));
