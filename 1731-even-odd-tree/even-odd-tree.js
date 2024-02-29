/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isEvenOddTree = function(root) {
    if (!root) return false;
    
    let queue = [root];
    let level = -1;
    
    while (queue.length > 0) {
        level++;
        let size = queue.length;
        let prev = 0;
        
        for (let i = 0; i < size; i++) {
            let curr = queue.shift();

            if (level === 0 && curr.val % 2 === 0) {
                return false;
            }

            if (i === 0) {
                if ((level % 2 === 0 && curr.val % 2 === 1) ||
                    (level % 2 === 1 && curr.val % 2 === 0)) {
                    prev = curr.val;
                } else {
                    return false;
                }
            } else {
                if (level % 2 === 1) {
                    if (curr.val % 2 === 0 && prev > curr.val) {
                        prev = curr.val;
                    } else {
                        return false;
                    }
                } else {
                    if (curr.val % 2 === 1 && prev < curr.val) {
                        prev = curr.val;
                    } else {
                        return false;
                    }
                }
            }

            if (curr.left) {
                queue.push(curr.left);
            }

            if (curr.right) {
                queue.push(curr.right);
            }
        }
    }
    
    return true;
};