const bfs = (tree, value) => {
  var queue = [];

  queue.push(tree[0]);

  while (queue.length) {
    // var node = queue.shift()
    let node = queue.shift();

    if (node.value === value) {
      return node;
    }
    if (node.left) {
      queue.push(tree[node.left]);
    }
    if (node.right) {
      queue.push(tree[node.right]);
    }
  }
  return null;
};
