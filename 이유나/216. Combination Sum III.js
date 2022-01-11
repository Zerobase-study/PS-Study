const combinationSum3 = function (k, n) {
  const answer = [];
  const temp = [];
  const target = n;

  const combinationSum = (sum, index) => {
    if (sum === target) {
      if (temp.length === k) answer.push([...temp]);
      return;
    }
    for (let i = index; i <= 9; i++) {
      if (sum + i <= target) {
        temp.push(i);
        combinationSum(sum + i, i + 1);
        temp.pop();
      }
    }
  };

  combinationSum(0, 1);
  return answer;
};

console.log(combinationSum3(3, 7)); // [[1,2,4]]
console.log(combinationSum3(3, 9)); // [[1,2,6],[1,3,5],[2,3,4]]
console.log(combinationSum3(4, 1)); // []
