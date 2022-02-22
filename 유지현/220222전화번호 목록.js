function solution(phone_book) {
  let hash_map = {};

  for (let phoneNumber of phone_book) {
    hash_map[phoneNumber] = 1;
  }

  for (let phoneNumber of phone_book) {
    let temp = "";

    for (let number of phoneNumber) {
      temp += number;
      if (hash_map[temp] && temp !== phoneNumber) return false;
    }
  }
  return true;
}

console.log(solution(["119", "97674223", "1195524421"])); // false
console.log(solution(["123", "456", "789"])); // true
console.log(solution(["12", "123", "1235", "567", "88"])); // false
