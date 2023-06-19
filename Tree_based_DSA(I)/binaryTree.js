/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-unused-vars */
/* eslint-disable max-classes-per-file */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(head = null) {
    this.head = head;
  }

  preorder(node = this.head) {
    if (node !== null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  inorder(node = this.head) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }

  postorder(node = this.head) {
    if (node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }

  isFullTree(node = this.head) {
    if (node === null) return true;
    if (node.left === node.right && node.left === null) return true;
    if (node.left !== null && node.right !== null)
      return this.isFullTree(node.left) && this.isFullTree(node.right);
    return false;
  }

  calculateDepth(node = this.head) {
    if (node === null) return 0;
    let depth = 0;
    while (node.left !== null) {
      node = node.left;
      depth += 1;
    }
    return depth;
  }

  isPerfectTree(node = this.head, level = 0, d = this.calculateDepth()) {
    if (node === null) return true;
    if (node.left === null && node.right === null) return d === level;
    if (node.left !== null && node.right !== null)
      return (
        this.isPerfectTree(node.left, level + 1, d) &&
        this.isPerfectTree(node.right, level + 1, d)
      );
    return false;
  }

  countNodes(node = this.head) {
    if (node === null) return 0;
    return 1 + this.countNodes(node.left) + this.countNodes(node.right);
  }

  isCompleteTree(node = this.head, index = 0, count = this.countNodes(node)) {
    if (node === null) return true;
    if (index > count) return false;
    return (
      this.isCompleteTree(node.left, 2 * index + 1, count) &&
      this.isCompleteTree(node.right, 2 * index + 2, count)
    );
  }
}

const node = new Node(1);
const tree = new Tree(node);
// node.left = new Node(2);
node.right = new Node(3);
node.right.right = new Node(4);
console.log(tree.isCompleteTree()); 
