const combine = function (n, k) {
  if (k > n) return [];
  const res = [];

  const helper = function (cur, index) {
    if (cur.length === k) {
      res.push([...cur]);
      return;
    }
    for (let i = index; i <= n; i++) {
      cur.push(i);
      helper(cur, i + 1);
      cur.pop();
    }
  };
  helper([], 1);
  return res;
};

console.log(combine(4, 2));
/* 
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
*/

console.log(combine(1, 1)); // [[1]]
