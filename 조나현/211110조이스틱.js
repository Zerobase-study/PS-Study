function solution(name) {
  let num;
  let cost = [];

  for (let i = 0; i < name.length; i++) {
    num = name[i].charCodeAt();
    cost[i] = num <= 77 ? num - 65 : 26 - (num - 65);
  }

  const toRight = (arr, index) => {
    let length = 0;
    while (arr[index] === 0) {
      length++;
      index = index < arr.length - 1 ? index + 1 : 0;
    }
    return [length, index];
  };

  const toLeft = (arr, index) => {
    let length = 0;
    while (arr[index] === 0) {
      length++;
      index = index > 0 ? index - 1 : arr.length - 1;
    }
    return [length, index];
  };

  let path = [...cost];
  path[0] = 0;
  let pathIdx = 0;
  let min = 0;

  while (path.some((value) => value !== 0)) {
    let [rightLen, rightIdx] = toRight(path, pathIdx);
    let [leftLen, leftIdx] = toLeft(path, pathIdx);

    min += leftLen < rightLen ? leftLen : rightLen;
    pathIdx = leftLen < rightLen ? leftIdx : rightIdx;
    path[pathIdx] = 0;
  }

  return min + cost.reduce((acc, val) => acc + val, 0);
}
