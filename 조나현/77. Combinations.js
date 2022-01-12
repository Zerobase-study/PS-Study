/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const res = [];
  const combination = (arr, target) => {
    if (arr.length === k) {
      res.push([...arr]);
    }
    for (let i = target; i <= n; i++) {
      arr.push(i);
      combination(arr, i + 1);
      arr.pop();
    }
  };

  combination([], 1);
  return res;
};

console.log(combine(4, 2));
