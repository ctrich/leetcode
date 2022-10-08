/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    //if one list is empty return the other
    if (list1 === null) {
        return list2
    } else if (list2 === null) {
        return list1
    }
    //get the first val to start with
    let firstVal = 0;
    if (list1.val < list2.val) {
        firstVal = list1.val;
        list1 = list1.next;
    } else {
        firstVal = list2.val;
        list2 = list2.next;
    }

    //create a new list and head
    let list3 = new ListNode(Math.min(firstVal), null);
    let mergedList = list3;

    while(list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            mergedList.next = list1;
            list1 = list1.next;
        } else {
            mergedList.next = list2;
            list2 = list2.next;
        }
        mergedList = mergedList.next;
    }
    //add the last node of whatever list that still has a node
    mergedList.next = list1 === null ? list2 : list1;
    return list3;
};