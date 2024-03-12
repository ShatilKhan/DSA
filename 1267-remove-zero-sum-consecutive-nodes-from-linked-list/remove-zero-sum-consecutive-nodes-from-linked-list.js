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
var removeZeroSumSublists = function(head) {
    const dummy = {};
    dummy.next = head;
    const hm = new Map();
    let pSum = 0;
    hm.set(pSum, dummy);

    while(head){
        pSum += head.val;
        if(hm.has(pSum)){
            let remove = hm.get(pSum).next, sum = pSum;
            while(remove !== head){
                sum += remove.val;
                hm.delete(sum);
                remove = remove.next;
            }
            hm.get(pSum).next = head.next;
        }else hm.set(pSum, head);
        head = head.next;
    }
    return dummy.next;
};