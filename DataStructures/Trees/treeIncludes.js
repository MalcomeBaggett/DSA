// check to see if a tree includes a given element

const treeIncludes = (root, target) => {
  if (root === null) return [];
  const q = [root];
  while (q.length > 0) {
    let current = q.shift();
    if (current.val === target) return true;
    if (current.left) q.push(current.left);
    if (current.right) q.push(current.right);
  }
  return false;
};

const treeIncludeRecursive = (root, target) => {
  if (root === null) return false;
  if (root.val === target) return true;
  if (root.left) treeIncludeRecursive(root.left, target);
  if (root.right) treeIncludedRecursive(root.right, target);
};
