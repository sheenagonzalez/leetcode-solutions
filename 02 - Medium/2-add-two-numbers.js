/** 
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

  You may assume the two numbers do not contain any leading zero, except the number 0 itself.

  Example 1:
  Input: l1 = [2,4,3], l2 = [5,6,4]
  Output: [7,0,8]
  Explanation: 342 + 465 = 807.

  Example 2:
  Input: l1 = [0], l2 = [0]
  Output: [0]

  Example 3:
  Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
  Output: [8,9,9,9,0,0,0,1]
  

  Constraints:

  The number of nodes in each linked list is in the range [1, 100].
  0 <= Node.val <= 9
  It is guaranteed that the list represents a number that does not have leading zeros.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let carry = 0;
  let head = new ListNode();
  let currNode = head;
  let v1 = l1.val;
  let v2 = l2.val;

  while (currNode) {
      // Calculate current node by adding the two current values and the carry (if there's any)
      let sumCurrVals = v1 + v2 + currNode.val;
      currNode.val = sumCurrVals % 10;

      // Keep track of carry by assigning to next node
      carry = sumCurrVals > 9 ? 1 : 0;
      if (l1.next || l2.next || carry) {
          currNode.next = new ListNode(carry, null);
      }

      // Move to next node
      currNode = currNode.next;

      // Traverse through l1 & l2
      if (l1.next) {
        l1 = l1.next;
        v1 = l1.val;
      } else {
          v1 = 0;
      }
      if (l2.next) {
        l2 = l2.next;
        v2 = l2.val;
      } else {
          v2 = 0;
      }
  }
  return head;
};