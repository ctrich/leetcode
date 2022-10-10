/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
    let list2 = head;
    let nextVals = new Set();
    nextVals.add(list2);
    
    while (list2 !== null) {
        if (nextVals.has(list2.next)) {
            return list2.next;
        } else {
         nextVals.add(list2.next)   
        }
        list2 = list2.next;
    }
    return null;
};