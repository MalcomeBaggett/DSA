const Node = require("./nodes");
// iterative
const DFS = (root) => {
  if (root === null) return [];
  const stack = [root];
  const searched = [];
  while (stack.length > 0) {
    const curr = stack.pop();
    console.log(curr.val);
    searched.push(curr);
    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }
  return searched;
};
// recursive

const DFSR = (root) => {
  if (root === null) return [];
  const left = DFSR(root.left);
  const right = DFSR(root.right);
  return [root.val, ...left, ...right];
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
a.left = b;
a.right = c;
DFS(a);
