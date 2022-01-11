const permute = function (nums) {
  const answer = [];

  function add(series) {
    if (series.length === nums.length) {
      return answer.push(series);
    }
    for (let i = 0; i < nums.length; i++) {
      if (!series.includes(nums[i])) {
        add([...series, nums[i]]);
      }
    }
  }

  add([]);
  return answer;
};

console.log(permute([1, 2, 3])); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(permute([0, 1])); // [[0,1],[1,0]]
console.log(permute([1])); // [[1]]
