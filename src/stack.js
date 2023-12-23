const { NotImplementedError } = require('../extensions/index.js');

class Stack {
  constructor() {
    this.items = [];
  }

  // Push element to the stack
  push(element) {
    this.items.push(element);
  }

  // Pop element from the stack
  pop() {
    if (this.isEmpty()) {
      return undefined; // If the stack is empty
    }
    return this.items.pop();
  }

  // Peek at the top element without removing it
  peek() {
    if (this.isEmpty()) {
      return undefined; // If the stack is empty
    }
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }
}

module.exports = {
  Stack
};
