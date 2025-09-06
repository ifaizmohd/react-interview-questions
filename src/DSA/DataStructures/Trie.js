import { TrieNode } from "./TrieNode";

export class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.endOfWord = true;
  }

  search(prefix) {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children[char]) {
        return [];
      }
      node = node.children[char];
    }
    return this._findAllWords(node, prefix);
  }

  _findAllWords(node, prefix) {
    let words = [];
    if (node.isEndOfWord) {
      words.push(prefix);
    }
    for (const char in node.children) {
      words = words.concat(
        this._findAllWords(node.children[char], prefix + char)
      );
    }
    return words;
  }
}
