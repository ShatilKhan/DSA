/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
        let solution = new Solution();
        return solution.firstPalindrome(words);
};

class Solution {
    check(s) {
        let i = 0, j = s.length - 1;
        while (i <= j) {
            if (s[i] === s[j]) {
                i++;
                j--;
            } else {
                return false;
            }
        }
        return true;
    }
    
    firstPalindrome(words) {
        for (let word of words) {
            if (this.check(word)) {
                return word;
            }
        }
        return "";
    }
}

