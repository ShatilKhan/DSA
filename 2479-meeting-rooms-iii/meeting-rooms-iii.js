/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function(n, meetings) {
    let solution = new Solution();
    return solution.mostBooked(n, meetings);
};

class Solution {
    mostBooked(n, meetings) {
        const ans = new Array(n).fill(0);
        const times = new Array(n).fill(0);
        meetings.sort((a, b) => a[0] - b[0]);

        for (let i = 0; i < meetings.length; i++) {
            const [start, end] = meetings[i];
            let flag = false;
            let minind = -1;
            let val = Number.MAX_SAFE_INTEGER;
            for (let j = 0; j < n; j++) {
                if (times[j] < val) {
                    val = times[j];
                    minind = j;
                }
                if (times[j] <= start) {
                    flag = true;
                    ans[j]++;
                    times[j] = end;
                    break;
                }
            }
            if (!flag) {
                ans[minind]++;
                times[minind] += (end - start);
            }
        }

        let maxi = -1;
        let id = -1;
        for (let i = 0; i < n; i++) {
            if (ans[i] > maxi) {
                maxi = ans[i];
                id = i;
            }
        }
        return id;
    }
}
