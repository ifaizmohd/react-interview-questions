/**
 * This is the node class, we will use this node class wherever a node is required.
 * Like in linked list, trees, stacks etc.
 * So this node will have two things -
 * 1. reference to next node,
 * 2. value of the current node.
 */

export class Node {
  constructor(value) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }

  setValue(value) {
    this.value = value;
  }
}
