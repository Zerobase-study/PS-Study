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
 var levelOrder = function(root) {
  let result = [];
  currentLevelNodes = [];
  if(root)
      currentLevelNodes.push(root);
  while(currentLevelNodes.length > 0) {
      current = [];
      let len = currentLevelNodes.length;
      console.log(len, currentLevelNodes)
      for (let i = 0; i< len; i++) {
          let node = currentLevelNodes.shift();
          console.log(node)
          current.push(node.val);
          if(node.left) {
              currentLevelNodes.push(node.left);
          }
          if(node.right) {
              currentLevelNodes.push(node.right);
          }
      }
      result.push(current);
  }
  return result;
};

// 1 [ [3,9,20,null,null,15,7] ]
// [3,9,20,null,null,15,7]
// 2 [ [9], [20,15,7] ]
// [9]
// [20,15,7]
// 2 [ [15], [7] ]
// [15]
// [7]