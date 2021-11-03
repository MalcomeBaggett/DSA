const node = require("./nodes");

const BFS = (root) => {
  if (root === null) return [];
  const searched = [];
  const q = [root];
  while (q.length > 0) {
    const current = q.shift();
    searched.push(current);
    if (current.left) q.push(current.left);
    if (current.right) q.push(current.right);
  }
  return searched;
};
