function solution(clothes) {
  let answer = 1;
  let clothList = {};

  for (let cloth of clothes) {
    clothList[cloth[1]] ? clothList[cloth[1]]++ : (clothList[cloth[1]] = 1);
  }

  for (let i of Object.values(clothList)) {
    answer *= i + 1;
  }

  return answer - 1;
}

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
); // 5
console.log(
  solution([
    ["crow_mask", "face"],
    ["blue_sunglasses", "face"],
    ["smoky_makeup", "face"],
  ])
); // 3
