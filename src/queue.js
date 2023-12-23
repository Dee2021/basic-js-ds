const { NotImplementedError } = require('../extensions/index.js');

class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const newNode = new ListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    if (!this.head) {
      return null; // Queue is empty
    }

    const dequeuedValue = this.head.value;
    this.head = this.head.next;

    if (!this.head) {
      this.tail = null; // If the queue is empty after dequeue
    }

    return dequeuedValue;
  }
}

module.exports = {
  Queue
};
