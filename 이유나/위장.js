// failed TC
/* 
function solution(clothes) {
  const map = new Map();
  let addCount = 0;
  let countCombination = 1;

  // 종류별로 분류해서 map에 저장
  for (const orderItem of clothes) {
    if (!map.has(orderItem[1])) {
      map.set(orderItem[1], orderItem[0]);
    } else {
      // 이미 있는 경우(=> 같은 종류)
      map.set(orderItem[1], map.get(orderItem[1]) + ',' + orderItem[0]);
    }
    // 아이템 추가할때마다 count++
    addCount++;
  }

  // 조합할 수 있는 경우의 수
  for (const k of map.keys()) {
    if (map.size !== 1) {
      countCombination *= map.get(k).split(',').length;
    }
  }

  return map.size === 1 ? addCount : countCombination + addCount;
}
*/

function solution(clothes) {
  const map = new Map();
  let addCount = 0;
  let countCombination = 1;

  // 종류별로 분류해서 map에 저장
  for (const orderItem of clothes) {
    if (!map.has(orderItem[1])) {
      map.set(orderItem[1], orderItem[0]);
    } else {
      // 이미 있는 경우(=> 같은 종류)
      map.set(orderItem[1], map.get(orderItem[1]) + ',' + orderItem[0]);
    }
    // 아이템 추가할때마다 count++
    addCount++;
  }

  // 조합할 수 있는 경우의 수
  for (const k of map.keys()) {
    if (map.size !== 1) {
      countCombination *= map.get(k).split(',').length + 1; // 수정
    }
  }

  return map.size === 1 ? addCount : countCombination - 1; // 수정
}

console.log(
  solution([
    ['yellowhat', 'headgear'],
    ['bluesunglasses', 'eyewear'],
    ['green_turban', 'headgear'],
  ])
); // 5
console.log(
  solution([
    ['crowmask', 'face'],
    ['bluesunglasses', 'face'],
    ['smoky_makeup', 'face'],
  ])
); // 3
