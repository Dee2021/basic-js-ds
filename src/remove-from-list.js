const { NotImplementedError } = require('../extensions/index.js');

class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {ListNode} l
 * @param {Number} k
 * @return {ListNode}
 */
function removeKFromList(l, k) {
  // Handle the case where the list is empty
  if (!l) {
    return null;
  }

  // Create a dummy node to simplify the code
  const dummy = new ListNode(0);
  dummy.next = l;
  
  // Initialize pointers for traversal
  let prev = dummy;
  let current = l;

  // Traverse the list
  while (current !== null) {
    if (current.value === k) {
      // Remove the node with value k
      prev.next = current.next;
    } else {
      // Move the pointers to the next node
      prev = current;
    }

    // Move to the next node
    current = current.next;
  }

  // Return the modified list
  return dummy.next;
}

module.exports = {
  removeKFromList
};
