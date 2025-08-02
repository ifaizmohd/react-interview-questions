/**
 * This class is the implementation of Linked list data structure class.
 */

import { Node } from "./Node";

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(data) {
    const node = new Node(data);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  find(data) {
    if (!this.head) return null;
    let node = this.head;
    while (node.getValue() !== data) {
      node = node.next;
    }
    return node;
  }

  printLinkedList() {
    let node = this.head;
    while (node.next) {
      console.log("LINKED LIST", node.getValue());
      node = node.next;
    }
  }
}
