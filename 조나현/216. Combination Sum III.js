/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const res = [];

  const backtrack = (arr, start, remaining) => {
    if (arr.length > k) return;
    if (arr.length === k && remaining === 0) res.push([...arr]);

    for (let i = start; i <= 9; ++i) {
      arr.push(i);
      backtrack(arr, i + 1, remaining - i);
      arr.pop();
    }
  };

  backtrack([], 1, n);

  return res;
};

console.log(combinationSum3(3, 7));
