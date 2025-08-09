import { BinaryTreeNode } from "./BinaryTreeNode";

export class BinaryTree {
  constructor(root) {
    this.root = new BinaryTreeNode(root);
  }

  insert(value) {
    const node = new BinaryTreeNode(value);
    if (this.root === null) {
      this.root = node;
      return;
    }

    // Level-order traversal to find insertion point
    const queue = [this.root];
    while (queue.length) {
      const current = queue.shift();

      if (!current.left) {
        current.left = node;
        return;
      }
      queue.push(current.left);

      if (!current.right) {
        current.right = node;
        return;
      }
      queue.push(current.right);
    }
  }

  printTree() {
    const queue = [this.root];
    const res = [];
    while (queue.length) {
      const currentNode = queue.shift();
      res.push(currentNode.value);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    console.log("[BINARY TREE] = ", res);
  }
}
