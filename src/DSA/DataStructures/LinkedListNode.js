export class LinkedListNode extends Node {
  constructor() {
    super();
    this.next = null;
  }

  setNext(value) {
    this.next = value;
  }

  getNext() {
    return this.next;
  }
}
