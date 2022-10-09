/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
    let list = head;
    let count = 1;
    while (list !== null) {
        list = list.next;
        count++
    }
    count = Math.ceil(count / 2)
    for (let i = 1; i < count; i++) {
        head = head.next;
    }
    return head;
};