import { LinkedList } from "./LinkedList";

const linkedList = new LinkedList();

const arr = ["hello", "how", "are", "you", "doing"];
for (let i = 0; i < arr.length; i++) {
  linkedList.insert(arr[i]);
}

export const reverseList = function (head) {
  if (head === null) return head;
  let prev = null;
  let current = head;
  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};
