/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    nums1.sort((a,b) => a - b);
    nums2.sort((a,b) => a - b);

    let res = [];
    let i = 0, j = 0;
    while(i < nums1.length && j < nums2.length){
        if( nums1[i] === nums2[j]){
            res.push(nums1[i]);
            i++;
            j++;
        }else if (nums1[i] < nums2[j]){
            i++;
        }else{
            j++;
        }
    }
    return [...new Set(res)] ;
};