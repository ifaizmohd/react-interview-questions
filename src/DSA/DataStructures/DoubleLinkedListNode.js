/**
 * this node will be used specifically for doubly linked list.
 */

import { Node } from "./Node";

export class DoublyLinkedListNode extends Node {
  constructor(prev) {
    super();
    this.prev = prev;
  }

  getPrev() {
    return this.prev;
  }

  setPrev(prev) {
    this.prev = prev;
  }
}
