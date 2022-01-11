const permute = function (nums) {
  const res = [];
  const permutation = (arr = []) => {
    if (arr.length === nums.length) return res.push([...arr]);
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== Infinity) {
        arr.push(nums[i]);
        nums[i] = Infinity;
        permutation(arr);
        nums[i] = arr.pop();
      }
    }
  };
  permutation();
  return res;
};

console.log(permute([1,2,3]))