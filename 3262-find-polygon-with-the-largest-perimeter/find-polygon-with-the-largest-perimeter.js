/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    let solution = new Solution();
    return solution.largestPerimeter(nums);
};

class Solution {
    largestPerimeter(nums) {
        nums.sort((a, b) => a - b);
        let sum = 0;
        let ans = -1;
        
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] < sum) {
                ans = nums[i] + sum;
            }
            sum += nums[i];
        }
        
        return ans;
    }
}

