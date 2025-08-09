export class LinkedListNode extends Node {
  constructor(value) {
    super(value);
    this.next = null;
  }

  setNext(value) {
    this.next = value;
  }

  getNext() {
    return this.next;
  }
}
