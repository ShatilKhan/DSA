/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // Create a dummy node to handle cases where the head is removed
    const dum = new ListNode(0);
    dum.next = head;

    // Initialize two pointers: first and second
    let first = dum;
    let scnd = dum;

    // Move the first pointer n nodes ahead of the second pointer
    for ( let i = 0; i < n + 1; i++){
        first = first.next;
    }
    while(first !== null){
        first = first.next;
        scnd = scnd.next;
    }

    // Remove the nth node from the end by adjusting pointers
    scnd.next = scnd.next.next;

    // Return the head of the modified linked list
    return dum.next;
};