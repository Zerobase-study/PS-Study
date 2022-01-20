/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

const levelOrder = function (root) {
  const answer = [];
  const queue = [root];

  if (!root) return [];

  while (queue.length > 0) {
    const level = [];

    for (let i = 0; i < queue.length; i++) {
      const current = queue.shift();

      if (current.left !== null) queue.push(current.left);
      if (current.right !== null) queue.push(current.right);

      level.push(current.val);
    }
    answer.push(level);
  }
  return answer;
};

// Better code
/*
var levelOrder = function (root) {
  const arr = [];

  function traverse(node, level) {
    if (!node) return;
    if (arr.length <= level) arr.push([]);
    arr[level].push(node.val);

    traverse(node.left, level + 1);
    traverse(node.right, level + 1);
  }

  traverse(root, 0);
  return arr;
};
*/
