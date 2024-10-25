class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// In-order traversal function that LeetCode would expect
var inorderTraversal = function (root) {
  const result = [];

  const inorder = (node) => {
    if (node !== null) {
      inorder(node.left); // Traverse left subtree
      result.push(node.val); // Visit the node (push the value)
      inorder(node.right); // Traverse right subtree
    }
  };

  inorder(root); // Start in-order traversal from the root
  return result; // Return the result array with in-order values
};

// Example usage:
const root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(6);
root.left = new TreeNode(0);

const result = inorderTraversal(root);
console.log(result);
