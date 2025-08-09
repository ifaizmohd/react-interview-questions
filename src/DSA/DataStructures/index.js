import { BinaryTree } from "./BinaryTree";
import { LinkedList } from "./LinkedList";

// const linkedList = new LinkedList();

// const arr = ["hello", "how", "are", "you", "doing"];
// for (let i = 0; i < arr.length; i++) {
//   linkedList.insert(arr[i]);
// }

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

const treeArr = [2, 7, 1, 3, 6, 9];
const tree = new BinaryTree(4);

treeArr.forEach((node) => {
  tree.insert(node);
});

tree.printTree();

export function reverseBinaryTree(root) {
  if (root === null) return [];
  const res = [];
  const queue = [root];
  while (queue.length) {
    const current = queue.shift();
    res.push(current.value);
    [current.left, current.right] = [current.right, current.left];
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return res;
}

console.log(
  "[BINARY TREE] reverse binary tree = ",
  reverseBinaryTree(tree.root)
);

const twoSum = (numbers, target) => {
  if (!numbers || !target) return [];
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) return [left + 1, right + 1];
    if (sum > target) right--;
    else left++;
  }
};

console.log("[TWO SUM] arr = ", twoSum([2, 7, 11, 15], 9));
