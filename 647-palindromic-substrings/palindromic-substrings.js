/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    function isPalindrome(left, right) {
        while (left < right) {
            if (s.charAt(left++) !== s.charAt(right--)) return false;
        }
        return true;
    }

    let ans = 0;
    const n = s.length;
    for ( let i = 0; i < n; i++) {
        for ( let j = i; j < n ; j++) {
            if (isPalindrome(i,j)) ans++;
        }
    }
    return ans;
};