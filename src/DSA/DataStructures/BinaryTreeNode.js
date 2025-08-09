import { Node } from "./Node";

export class BinaryTreeNode extends Node {
  constructor(value) {
    super(value);
    this.left = null;
    this.right = null;
  }

  setLeft(value) {
    this.left = value;
  }

  setRight(value) {
    this.right = value;
  }

  getLeft() {
    return this.left;
  }

  getRight() {
    return this.right;
  }
}
