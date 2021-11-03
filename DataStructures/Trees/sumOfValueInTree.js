const nodes = require("./nodes");

const sumOfTreeValues = (root) => {
  if (root === null) return [];
  const stack = [root];
  const sum = 0;

  while (stack.length > 0) {
    current = stack.pop();
    sum += current.val;
    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }
  return sum;
};

const sumOfTreeValueRecursive = (root) => {
  if (root === null) return 0;
  return (
    root.val +
    sumOfTreeValueRecursive(root.left) +
    sumOfTreeValueRecursive(tree.right)
  );
};
